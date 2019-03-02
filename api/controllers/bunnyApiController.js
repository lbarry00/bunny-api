"use strict";

var mongoose = require("mongoose"),
 	Bunny = mongoose.model("Images");


exports.get_random_bunny = function(req, res) {
  Bunny.count().exec(function(err, count) {
	var random = Math.floor(Math.random() * count);

	Bunny.findOne().skip(random).exec(function(err, bunny) {
	  if (err) {
	    res.json(
	      {
	        success: false,
	        err
	      }
	    );
	  } else {
	    res.json(
	      {
	        success: true,
	        bunny
	      }
	    );
	  }
	});
  });
}

exports.get_all_bunnies = function(req, res) {
	Bunny.find().exec(function(err, bunny) {
	if (err) {
	  res.json(
	    {
	      success: false,
	      err
	    }
	  );
	} else {
	  res.json(
	    {
	      success: true,
	      bunny
	    }
	  );
	}
	});
}

exports.add_a_bunny = function(req, res) {
    var new_bunny = new Bunny(req.body); // img: <link>
    new_bunny.save(function(err, bunny) {
    if (err) {
      res.json({ success: false, error: err })
    } else {
      res.json({ success: true });
    }
  });
}

exports.get_a_bunny = function(req, res) {
	Bunny.findById(req.params.id, function(err, bunny) {
	if (err) {
	  res.json(
	    {
	      success: false,
	      error: "Error finding bunny with ID: " + req.params.id
	    }
	  );
	} else {
	  res.json(
	    {
	      success: true,
	      bunny
	    }
	  );
	}
	});
};

exports.delete_a_bunny = function(req, res) {
	Bunny.remove({
	_id: req.params.id
	}, function(err, bunny) {
	if (err) {
	  res.json(
	    {
	      success: false,
	      error: "Could not delete bunny with ID: " + req.params.id
	    }
	  );
	} else {
	  res.json(
	    {
	      success: true,
	      bunny
	    }
	  );
	}
	});
}

exports.count_bunnies = function(req, res) {
  Bunny.countDocuments(function(err, count) {
    if (err) {
      res.json(
        {
          success: false,
          error: err
        }
      );
    } else {
      res.json(
        {
          success: true,
          count
        }
      );
    }
  });
}
