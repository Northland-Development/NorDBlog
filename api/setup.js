var mysqlx = require('@mysql/xdevapi');


const connectionSettings = { 
  host: process.env.API_URL, 
  port: process.env.DB_PORT,
  user: process.env.DB_USER, 
  password: process.env.DB_PASS
}


const setSession = () => {
  return mysqlx.getSession(connectionSettings)
  .then( dictSession => {
    return dictSession.getSchema(process.env.DB_SCHEMA)
  }
  ).catch(err => console.error(err))
}

const selectTable = (tableName,selectArray) => {
  return setSession().then(
    session => session.getTable(tableName).select(selectArray).execute()
  ).catch(err => console.error(err)
  ).then(
    results => {
      const thisArray = [];
      let row = results.fetchOne();
      while (row){
        const thisObj = {};
        for (let index = 0; index < selectArray.length; index++) {
          const key = selectArray[index];
          thisObj[key] = row[index];
        }
        thisArray.push(thisObj);
        row = results.fetchOne();
      }
      return thisArray;
    }
  )
}


const getBlogs = () => {
  selectTable('blog',['ID','text','created_at','user_id'])
  .then(
    queryResults => {
      console.log(queryResults)
    }
  ).catch(err => console.error(err))
}

export {getBlogs};