import { createClient } from "@supabase/supabase-js";

const supabaseUrl: any = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseAnonKey: any = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;

export default createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});
