import Replicate from "replicate";

const generateImage = async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const model =
      "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4";
    const input = {
      prompt: prompt || "a young man, 25, walking along the beach",
    };
    const output = await replicate.run(model, { input });
    res.status(200).json(output);
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Image generation failed" });
  }
};

export default generateImage;