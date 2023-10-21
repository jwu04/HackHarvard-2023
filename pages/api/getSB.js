import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseAuth = async (req, res) => {

    const { data, error } = await supabase
        .from('memories')
        .select()

    if (error) {
        res.status(200).json({ success: JSON.stringify(error)})
        return
    } else {
        res.status(200).json({ success: 'true' })
    }
}

export default supabaseAuth;
