// CRUD SQL语句
var pagesql = {
	insert:'INSERT INTO log(id, name, age) VALUES(0,?,?)',
	update:'update log set name=?, age=? where id=?',
	delete: 'delete from log where id=?',
	queryById: 'select * from log where id=?',
	queryAll: 'select * from log'
};

module.exports = pagesql;