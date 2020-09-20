var mysqlx = require('@mysql/xdevapi');


const connectionSettings = { 
  host: process.env.API_URL || 'localhost', 
  port: process.env.DB_PORT || '33061',
  user: process.env.MYSQL_USER || 'badam', 
  password: process.env.MYSQL_PASSWORD || 'password'
}


const setSession = () => {
  return mysqlx.getSession(connectionSettings)
  .then( dictSession => {
    console.log(dictSession.getTable)
    return dictSession.getTable('nordblog')
    // return dictSession.getTable(process.env.MYSQL_DATABASE || 'nordblog')
  }
  ).catch(err => console.error(err))
}

const selectTable = (tableName,selectArray) => {
  setSession()
  // return setSession().then(
  //   session => session.getTable(tableName).select(selectArray).execute()
  // ).catch(err => console.error(err)
  // ).then(
  //   results => {
  //     const thisArray = [];
  //     let row = results.fetchOne();
  //     while (row){
  //       const thisObj = {};
  //       for (let index = 0; index < selectArray.length; index++) {
  //         const key = selectArray[index];
  //         thisObj[key] = row[index];
  //       }
  //       thisArray.push(thisObj);
  //       row = results.fetchOne();
  //     }
  //     return thisArray;
  //   }
  // )
}


const getBlogs = () => {
  selectTable('blog',['ID','text','created_at','user_id'])
  // selectTable('blog',['ID','text','created_at','user_id'])
  // .then(
  //   queryResults => {
  //     console.log(queryResults)
  //   }
  // ).catch(err => console.error(err))
}

// export {getBlogs};

getBlogs()