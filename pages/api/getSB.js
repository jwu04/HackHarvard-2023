import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://exkudtzambimhqmbrrev.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4a3VkdHphbWJpbWhxbWJycmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MDc3MTQsImV4cCI6MjAxMzQ4MzcxNH0.s3yzcYjZlMUhS0GdUutayWDMGvQsUXPZnetcAKLH3co'
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseAuth = async (req, res) => {

    const { data, error } = await supabase
        .from('memories')
        .insert([
            { name: '' },
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
