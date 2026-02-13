import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rwggwqfkygfrcnyleowf.supabase.co'
const supabaseKey = "sb_publishable_zO7ccp-mcda54Xwhy_LnIg_Y0jv2sgm"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;