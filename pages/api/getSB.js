import { createClient } from '@supabase/supabase-js'  

const supabase = createClient(
    'https://db.exkudtzambimhqmbrrev.supabase.co.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4a3VkdHphbWJpbWhxbWJycmV2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzkwNzcxNCwiZXhwIjoyMDEzNDgzNzE0fQ.JNg-sMnrp5wm-IvszmOiAeQ9Z9yn7-TNV2_XOWJtC7o'
)

const supabaseAuth = async (req, res) => {

    const { data, error } = await supabase
        .from('memories')
        .select('*')
    if (error) {
        res.status(200).json({ success: string(error)})
        return
    } else {
        res.status(200).json({ success: true })
    }
}

export default supabaseAuth;
