const updateSalaryById = async(id: string, salary: number): Promise<any> => {
    try{
      const result = await connection("id")
        .update({
          salary: salary
        })
        .where("id", id)

    }
    catch(error){
      console.log(error.sqlMessage || error.message)
    }
  }

// b)
  const deleteActorById = async(id: string): Promise<void> => {    // não tem retorno ao deletar
    try{
      const result = await connection("id")
      .delete()
      .where({id})

    }
    catch(error){
      console.log(error.sqlMessage || error.message)
    }
  }

// c) 
  const avgByGender = async(gender: string): Promise<any> => {
    try{
      const result = await connection("id")
        .avg('salary as average')
        .where({gender})

     return result[0].average
    }
    catch(error){
     console.log(error.sqlMessage || error.message) 
    }
  }
