import { createClient } from '@supabase/supabase-js'
const requestIp = require('request-ip');

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseGet = async (req, res) => {
    
    const ipAddress = requestIp.getClientIp(req);
    
    const { data, error } = await supabase
    .from('memories')
    .insert([
    { ip: ipAddress, mem_caption: req.body.caption, mem_img: req.body.img},
    ])
    .select()

    if (error) {
        res.status(404).json({ success: 'false' })
        return
    } else {
        res.status(200).json(data)
    }
}

export default supabaseGet;
