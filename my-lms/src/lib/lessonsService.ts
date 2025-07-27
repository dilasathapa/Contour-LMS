import { supabase } from "./supabaseClient";

// fetch all the lessons
export async function fecthLessons(){
    const {data, error} = await supabase
        .from('lessons')
        .select('*')
        .order('scheduled_date', {ascending : true})

    if(error){
        console.error('Error fetching lessons : ', error.message)
        return []
    }
    return data;
}

export async function togglelessonStatus(lessonId: string, newStatus: boolean) {
  // Fetch existing lesson data first
  const { data: existing, error: fetchError } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', lessonId)
    .single();

  if (fetchError) {
    console.error("Error fetching lesson:", fetchError);
    throw fetchError;
  }

  // Merge updated status
  const updatedLesson = { ...existing, is_completed: newStatus };

  // Perform PUT (use update internally)
  const { error } = await supabase
    .from('lessons')
    .upsert(updatedLesson, { onConflict: 'id' }); // acts like PUT

  if (error) {
    console.error("Error updating lesson status:", error);
    throw error;
  }
}