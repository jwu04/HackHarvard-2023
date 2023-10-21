import QuizState from "../components/states/QuizState.js"
import SB from "../components/SB.js"
import DashboardState from "../components/states/DashboardState";
import GenerateImage from "../components/Generation.js";

export default function Home() {
    return (
        <>
            <DashboardState/>
            <GenerateImage/>
            {/*<SB/>*/}
        </>
    )
}
