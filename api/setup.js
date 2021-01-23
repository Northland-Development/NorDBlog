var mysqlx = require('@mysql/xdevapi');
// import { getSession } from '@mysql/xdevapi';
const getSession = mysqlx.getSession

const connectionSettings = { 
  host: process.env.API_URL || 'localhost', 
  port: process.env.DB_PORT || '33061',
  user: process.env.MYSQL_USER || 'badam', 
  password: process.env.MYSQL_PASSWORD || 'password'
}


const setSession = () => {
  return getSession(connectionSettings
    ).then( dictSession => {
    console.log(dictSession.getTable)
  }
  ).catch(err => console.error(err))
}

const selectTable = (tableName,selectArray) => {
  return setSession()
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
  // selectTable('blog',['ID','text','created_at','user_id'])
  return selectTable('blog',['ID','text','created_at','user_id'])
}

// export {getBlogs};

getBlogs().then(r => console.log(r)).catch(err => console.error(err))