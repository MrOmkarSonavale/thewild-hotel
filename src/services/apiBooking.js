import supabase from "./superbase";

export async function getCabins() {

    const { data: cabin, error } = await supabase
        .from('cabin')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error('cabin could not be loaded');

    }

    return cabin;
}