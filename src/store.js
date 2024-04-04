import { reactive } from "vue";

const state = reactive({
    
        "reports_performed": [
          {
            "type": "Damage assessment",
            "location": "36 Oyster Street",
            "new_damage": "Yes",
            "damage_type": "on purpose",
            "date": "2024-03-25",
            "acute_action_required": "No",
            "description": "Broken door due to burglary",
            "pictures": ["picture01.jpg", "picture02.jpg"]
          },
          {
            "type": "Include overdue maintenance",
            "location": "2 Charing Cross Road",
            "type_of_maintenance": "electricity",
            "acute_action_required": "Yes",
            "cost_indication": "500-1.500",
            "pictures": ["foto3.jpg"]
          },
          {
            "type": "Inspecting technical installations",
            "location": "10 Downing Street",
            "type_of_installation": "heating",
            "reported_faults": "No faults reported",
            "test_procedure": "procedure_102.pdf",
            "approved": "Yes",
            "comments": "no details",
            "pictures": ["foto4.jpg"]
          },
          {
            "type": "Listing changes",
            "modifications": "modification_132.pdf",
            "location": "4 Bricklane",
            "performed by": "tenant",
            "description_modification": "Replacing a window for double glazing",
            "action": "accept",
            "comments": "no details",
            "pictures": ["foto5.jpg"]
          },
          {
            "type": "damage assessment",
            "location": "5 Tower Hill",
            "new_damage": "Yes",
            "sdamage_type": "wear",
            "date": "2024-03-26",
            "acute_action_required": "Yes",
            "description": "Change window",
            "pictures": ["foto6.jpg"]
          }
        ]
      
});

export default {
    state: state,
};


    // {
    //   type: "Damage assessment",
    //   location: "36 Oyster Street",
    //   new_damage: "Yes",
    //   damage_type: "on purpose",
    //   date: "2024-03-25",
    //   acute_action_required: "No",
    //   description: "Broken door due to burglary",
    //   pictures: ["picture01.jpg", "picture02.jpg"]
    // },
    // {
    //   "type": "Achterstallig onderhoud opnemen",
    //   "location": "2 Charing Cross Road",
    //   "type_of_maintenance": "electricity",
    //   "acute_action_required": "Yes",
    //   "cost_indication": "500-1.500",
    //   "pictures": ["foto3.jpg"]
    // },
    // {
    //   "type": "Inspecting technical installations",
    //   "location": "10 Downing Street",
    //   "type_of_installation": "heating",
    //   "reported_faults": "No faults reported",
    //   "test_procedure": "procedure_102.pdf",
    //   "approved": "Yes",
    //   "comments": "no details",
    //   "pictures": ["foto4.jpg"]
    // },
    // {
    //   "type": "Modificaties inventariseren",
    //   "modifications": "modification_132.pdf",
    //   "location": "4 Bricklane",
    //   "performed by": "tenant",
    //   "description_modification": "Replacing a window for double glazing",
    //   "action": "accept",
    //   "comments": "no details",
    //   "pictures": ["foto5.jpg"]
    // },
    // {
    //   "type": "damage assessment",
    //   "location": "5 Tower Hill",
    //   "new_damage": "Yes",
    //   "damage_type": "wear",
    //   "date": "2024-03-26",
    //   "acute_action_required": "Yes",
    //   "description": "Change window",
    //   "pictures": ["foto6.jpg"]
    // }