import { createClient } from '@supabase/supabase-js'

const requestIp = require('request-ip');

const supabaseUrl = 'https://xxx.supabase.co'
const supabaseKey = 'xxx'
const supabase = createClient(supabaseUrl, supabaseKey)

const firebaseAuthFunctionPlaceholderName = async (req, res) => {
    const { data, error } = await supabase
        .from('memories')
        .insert([
                { val1: 'value1Placeholder', val2: 'value2Placeholder' },
        ])
        .select()

    if (error) {
        res.status(404).json({ success: false });
        return;
    }

    if (data) {
        res.status(200).json({ success: true });
    }
};

export default firebaseAuthFunctionPlaceholderName;
