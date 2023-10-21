import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ugxgeaqipnhozklclxbv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVneGdlYXFpcG5ob3prbGNseGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MDcxMjYsImV4cCI6MjAxMzQ4MzEyNn0.XYfU8MpoTL5ONwvMBCQyuR5p1M_XuEkoguhTM5O2mGo'
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseAuth = async (req, res) => {

    const { data, error } = await supabase
        .from('memories')
        .insert([
            { name: 'hehea' },
        ])
        .select()

    if (error) {
        res.status(200).json({ success: JSON.stringify(error)})
        return
    } else {
        res.status(200).json({ success: 'true' })
    }
}

export default supabaseAuth;
