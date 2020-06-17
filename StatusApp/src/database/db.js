import {openDatabase  } from 'react-native-sqlite-storage'

// creating a database
const db = openDatabase('status.db')

// create table if not exists
export const init = ()=> {
    const promise = new Promise ((resolve , reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS favStatus ( id TEXT PRIMARY KEY NOT NULL , status TEXT NOT NULL);' ,
            [],
            (_,result)=>{
                resolve(result)
            },
            (_, error)=>{
                reject(error)
            })
        })
    })
    return promise
    
}

// inserting data into table
export const insertStatus = ( id , status) => {
    const promise = new Promise((resolve , reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('INSERT INTO favStatus ( id , status ) VALUES ( ? ,?);' ,
            [ id , status],
            (_ , result)=>{
                resolve(result)
            },
            (_,error)=>{
                reject(error)
            })
        })
    })
    return promise
}

// getting FavStatus
export const getFavStatus = ()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM favStatus',
            [],
            (_, result)=>{
                resolve(result)
            },
            (_ , error)=>{
                reject(error)
            })
        })
    })
    return promise
}

// deleting a favStatus
export const deleteFavStatus = (id)=>{
    const promise = new Promise ((resolve , reject)=>{
        db.transaction(tx=>{
            tx.executeSql('DELETE FROM favStatus WHERE id=?',
            [id],
            (_ , result)=>{
                resolve(result)
            },
            (_ , error)=>{
                reject(error)
            })
        })
    })
    return promise
}