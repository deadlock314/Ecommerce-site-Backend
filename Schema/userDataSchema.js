const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  Country: { type: String },
  FullName: { type: String },
  MobileNumber: { type: String },
  Pincode: { type: Number },
  FlatHousenoBuildingCompanyApartment: { type: String },
  AreaStreetSectorVillage: { type: String },
  Landmark: { type: String },
  City: { type: String },
  State: { type: String },
  flag: { type: Number }

});

const userDataSchema = new mongoose.Schema({

  userAccData: {
    name: {
      type: String,
      required: [true, 'name required'],
      minlength: 3

    },
    email: {
      required: [true, 'e-mail address required'],
      unique: [true, 'existing email addresss '],
      type: String,
      lowercase: true
    },
    mobile: {
      type: String, minlength: 10
    },
    orders: {

      fullfilledOrders: {
        type: Array
      },
      pendingOrders: {
        type: Array
      },
      cartProducts: {
        type: Array
      }
    },
    profession: {
      type: String
    }

    ,
    AddressArray: {
      type: Array,
      AddressSchema

    },
    DefaultPayment: {
      method: { type: String },
      paymentMetadata: {
        id: { type: String },
        etc: { type: String }
      }

    }

  },
  userNonImpData: {

    AccCreationDate: {
      type: Date

    }
  }




});
const User = mongoose.model('user', userDataSchema)
module.exports = User;