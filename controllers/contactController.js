const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel"); 
const contactModel = require("../models/contactModel");

//@desc Get all contacts
//@route Get/api/contacts
//@access public

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await contactModel.find();
    res.status(200).json(contacts);
});


//@desc Create new contacts
//@route Post /api/contacts
//@access public

const createContact = asyncHandler( async(req,res) => {
    //console.log(req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        throw new Error("All details Mandetory");
        
        res.status(401).json({message: "contact not created"});
    }
    else{
    const contacts = await Contact.create({
    name,
    email,
    phone
});
    res.status(201).json(contacts);
    }
});


//@desc get contacts
//@route get /api/contacts/:id
//@access public

const getContact =asyncHandler(async (req,res) => {

    const contact1 = await Contact.findById(req.params.id);
    if(!contact1){
        res.status(404);
        throw new Error("Contact not found");
    }
    
    res.status(200).json(contact1);
    
});

//@desc update contacts
//@route update /api/contacts/:id
//@access public

const updateContact =asyncHandler( async(req,res) => {
    const contact1 = await Contact.findById(req.params.id);
    if(!contact1){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(

        req.params.id ,
        req.body,
        {
            new: true
        }
    ); 

    res.status(200).json(updatedContact);
});



//@desc delete contacts
//@route update /api/contacts/:id
//@access public

const deleteContact =asyncHandler(async (req,res) => {

    const contact1 = await Contact.findById(req.params.id);
    if(!contact1){
        res.status(404);
        throw new Error("Contact not found");
    }
    await contact1.deleteOne(
        
    );


    res.status(200).json(contact1);
});




module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact};