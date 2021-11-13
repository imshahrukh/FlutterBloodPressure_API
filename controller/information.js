const _INFORMATION = require("../model/Information");

// Methods
// addMember
// getAllMembers
// getMemeberByID
// updateMemberByID
// addMember

exports.addNewBlood = async function (req, res) {
  try {
    const addInformation = await _INFORMATION.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        bloodPressureList: addInformation,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

// get All memebers
exports.getAllBlood = async function (req, res) {
  try {
    var bloodList = await _INFORMATION.find({ member_id: req.params.id });

    const tot_list = Object.keys(bloodList).length;

    res.status(201).json({
      status: "success",
      total: tot_list,
      data: {
        bloodPressureList: bloodList,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

// exports.updateMemberByID = async function (req, res) {
//   try {
//     var members = await _INFORMATION.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//       }
//     );

//     res.status(201).json({
//       status: "success",
//       data: {
//         member: members,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data fail to add in the Database........",
//     });
//   }
// };
