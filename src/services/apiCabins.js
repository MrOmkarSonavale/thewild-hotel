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

export async function deleteCabin(id) {
    const { data, error } = await supabase.from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error('cabin not deleted');
    }

    return data;
}

export async function createCabin(newCabin) {

    const { data, error } = await supabase
        .from('cabin')
        .insert([
            newCabin
        ])
        .select()

    if (error) {
        throw new Error('cabin not created');
    }

    return data;
}