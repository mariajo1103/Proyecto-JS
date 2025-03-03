async function getConsults() {
    try {
        const response = await fetch("http://localhost:3001/consults/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching consults');
        }

        const consults = await response.json();
        return consults;
    } catch (error) {
        console.error('Error fetching consults:', error);
        throw error;
    }
}

export { getConsults };

//////////LLAMADO POST//////////

async function postConsults(fecha,consulta) {
    try {
     
        const userData = {
            fecha, 
            consulta
        
        };



        const response = await fetch("http://localhost:3001/consults/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting consults:', error);
        throw error;
    }
}

export{postConsults}

//////////////LLAMADO UPDATE/////////////


async function updateConsults(usuario,contraseña,id) 
{
    try {
     
        const userData = { 
            usuario, 
            contraseña
        
        };


        


        const response = await fetch("http://localhost:3001/consults/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update consults:', error);
        throw error;
    }
}

export{updateConsults}



//////////////LLAMADO DELETE/////////////


async function deleteConsults(id) {
    try {
        const response = await fetch(`http://localhost:3001/consults/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting consults with id ${id}`);
        }

        return { message: `consults with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting consults:', error);
        throw error;
    }
}

export { deleteConsults };
