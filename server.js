var bodyParser = require("body-parser");
var express = require('express');
var app = express();

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var pool = require('./db');

var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log('Node app is running on port', port);
});

app.get('/hometeacher', function(request, response) {
	  getHometeacher(request, response);
});

app.get('/family', function(request, response) {
	  getFamily(request, response);
});

app.get('/companionshipfamilies', function(request, response) {
	  getCompanionshipFamilies(request, response);
});

app.get('/companionship', function(request, response) {
	  getCompanionship(request, response);
});

app.get('/reportsForMonth', function(request, response) {
	  getReportsForMonth(request, response);
});

app.post('/report', function(request, response) {
	  createFamilyReportForMonth(request, response);
});

app.delete('/report', function(request, response) {
	  deleteReport(request, response);
});

app.get('/report', function(request, response) {
    if (request.query.family_id) {
	      getFamilyReportForMonth(request, response);
    } else if (request.query.companionship_id) {
	      getCompanionshipReportsForMonth(request, response);
    }
});

app.route('/*').get(function(request, response) {
    return response.sendFile(__dirname + '/dist/index.html');
});

function getHometeacher(request, response) {
    var id = request.query.id;

    getHometeacherFromDB(id, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getHometeacherFromDB(id, callback) {
    pool.query('SELECT * FROM hometeacher WHERE id = $1::int', [id], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Hometeacher:', res.rows);
        callback(null, res.rows);
    });
}

function getFamily(request, response) {
    var id = request.query.id;
    getFamilyFromDB(id, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getFamilyFromDB(id, callback) {
    pool.query('SELECT * FROM family WHERE id = $1::int', [id], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Family:', res.rows);
        callback(null, res.rows);
    });
}

function getCompanionshipFamilies(request, response) {
    var id = request.query.companionship_id;
    getCompanionshipFamiliesFromDB(id, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getCompanionshipFamiliesFromDB(id, callback) {
    pool.query('SELECT * FROM family WHERE companionship_id = $1::int', [id], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Families:', res.rows);
        callback(null, res.rows);
    });
}

function getCompanionship(request, response) {
    var id = request.query.id;
    getCompanionshipFromDB(id, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getCompanionshipFromDB(id, callback) {
    pool.query('SELECT * FROM hometeacher WHERE companionship_id = $1::int', [id], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Companionship:', res.rows);
        callback(null, res.rows);
    });
}

function getReport(request, response) {
    var id = request.query.id;
    getReportFromDB(id, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getReportFromDB(id, callback) {
    pool.query('SELECT * FROM report WHERE companionship_id = $1::int', [id], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Report:', res.rows);
        callback(null, res.rows);
    });
}

function getReportsForMonth(request, response) {
    var month = request.query.month;
    var year = request.query.year;
    getReportForMonthFromDB(month, year, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getReportForMonthFromDB(month, year, callback) {
    pool.query('SELECT * FROM report WHERE EXTRACT(MONTH FROM report_date) = $1::int AND EXTRACT(YEAR FROM report_date) = $2::int', [month, year], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Report:', res.rows);
        callback(null, res.rows);
    });
}

function getCompanionshipReportsForMonth(request, response) {
    var companionshipId = request.query.companionship_id;
    var month = request.query.month;
    var year = request.query.year;
    getCompanionshipReportForMonthFromDB(month, year, companionshipId, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getCompanionshipReportForMonthFromDB(month, year, companionshipId, callback) {
    pool.query('SELECT * FROM report WHERE EXTRACT(MONTH FROM report_date) = $1::int AND EXTRACT(YEAR FROM report_date) = $2::int AND companionship_id = $3::int', [month, year, companionshipId], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Report:', res.rows);
        callback(null, res.rows);
    });
}

function getFamilyReportForMonth(request, response) {
    var familyId = request.query.family_id;
    var month = request.query.month;
    var year = request.query.year;
    getFamilyReportForMonthFromDB(month, year, familyId, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function getFamilyReportForMonthFromDB(month, year, companionshipId, callback) {
    pool.query('SELECT * FROM report WHERE EXTRACT(MONTH FROM report_date) = $1::int AND EXTRACT(YEAR FROM report_date) = $2::int AND family_id = $3::int', [month, year, companionshipId], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        console.log('Report:', res.rows);
        callback(null, res.rows);
    });
}

function createFamilyReportForMonth(request, response) {
    var familyId = request.body.family_id;
    var companionshipId = request.body.companionship_id;
    var date = request.body.report_date;
    createFamilyReportForMonthForDB(familyId, companionshipId, date, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function createFamilyReportForMonthForDB(familyId, companionshipId, date, callback) {
    pool.query('INSERT INTO report(family_id, companionship_id, report_date) VALUES( $1::int, $2::int, $3::date)', [familyId, companionshipId, date], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        callback(null, res);
    });
}

function deleteReport(request, response) {
    var id = request.query.id;
    deleteReportFromDB(id, (error, result) => {
        if (error || result == null) {
            response.status(500).json({success: false, data: error});
        } else {
            response.status(200).json({success: true, data: result});
        }
    });
}

function deleteReportFromDB(id, callback) {
    pool.query('DELETE FROM report WHERE id = $1::int', [id], function(err, res) {
        if(err) {
            console.error('error running query', err);
            callback(err, null);
        }
        callback(null, res);
    });
}

