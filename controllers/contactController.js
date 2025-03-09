const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route Get/api/contacts
//@access public

const getContacts = asyncHandler(async (req,res) => {

    res.status(200).json({message: "Get all contacts"});
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
    res.status(201).json({message: "create contact"});
    }
});


//@desc get contacts
//@route get /api/contacts/:id
//@access public

const getContact =asyncHandler(async (req,res) => {

    res.status(200).json({message: `get contact for id:${req.params.id}`});
});

//@desc update contacts
//@route update /api/contacts/:id
//@access public

const updateContact =asyncHandler( async(req,res) => {

    res.status(200).json({message: `Update contact for id:${req.params.id}`});
});



//@desc delete contacts
//@route update /api/contacts/:id
//@access public

const deleteContact =asyncHandler(async (req,res) => {
    res.status(200).json({message: `delete contact for idL${req.params.id}`});
});




module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact};