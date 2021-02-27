import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_ALL_CONTACT,
  // GET_ALL_CONTACT,
} from "../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      address: {
        geo: { lat: "-37.3159", lng: "81.1496" },
        city: "Gwenborough",
        suite: "Apt. 556",
        street: "Kulas Light",
        zipcode: "92998-3874",
      },
      company: {
        bs: "harness real-time e-markets",
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
      },
      website: "hildegard.org",
      username: "Bret",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      address: {
        geo: { lat: "-43.9509", lng: "-34.4618" },
        city: "Wisokyburgh",
        suite: "Suite 879",
        street: "Victor Plains",
        zipcode: "90566-7771",
      },
      company: {
        bs: "synergize scalable supply-chains",
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
      },
      website: "anastasia.net",
      username: "Antonette",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      address: {
        geo: { lat: "-68.6102", lng: "-47.0653" },
        city: "McKenziehaven",
        suite: "Suite 847",
        street: "Douglas Extension",
        zipcode: "59590-4157",
      },
      company: {
        bs: "e-enable strategic applications",
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
      },
      website: "ramiro.info",
      username: "Samantha",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      address: {
        geo: { lat: "29.4572", lng: "-164.2990" },
        city: "South Elvis",
        suite: "Apt. 692",
        street: "Hoeger Mall",
        zipcode: "53919-4257",
      },
      company: {
        bs: "transition cutting-edge web services",
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
      },
      website: "kale.biz",
      username: "Karianne",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      address: {
        geo: { lat: "-31.8129", lng: "62.5342" },
        city: "Roscoeview",
        suite: "Suite 351",
        street: "Skiles Walks",
        zipcode: "33263",
      },
      company: {
        bs: "revolutionize end-to-end systems",
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
      },
      website: "demarco.info",
      username: "Kamren",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      address: {
        geo: { lat: "-71.4197", lng: "71.7478" },
        city: "South Christy",
        suite: "Apt. 950",
        street: "Norberto Crossing",
        zipcode: "23505-1337",
      },
      company: {
        bs: "e-enable innovative applications",
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
      },
      website: "ola.org",
      username: "Leopoldo_Corkery",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      phone: "210.067.6132",
      address: {
        geo: { lat: "24.8918", lng: "21.8984" },
        city: "Howemouth",
        suite: "Suite 280",
        street: "Rex Trail",
        zipcode: "58804-1099",
      },
      company: {
        bs: "generate enterprise e-tailers",
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
      },
      website: "elvis.io",
      username: "Elwyn.Skiles",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      phone: "586.493.6943 x140",
      address: {
        geo: { lat: "-14.3990", lng: "-120.7677" },
        city: "Aliyaview",
        suite: "Suite 729",
        street: "Ellsworth Summit",
        zipcode: "45169",
      },
      company: {
        bs: "e-enable extensible e-tailers",
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
      },
      website: "jacynthe.com",
      username: "Maxime_Nienow",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      address: {
        geo: { lat: "24.6463", lng: "-168.8889" },
        city: "Bartholomebury",
        suite: "Suite 449",
        street: "Dayna Park",
        zipcode: "76495-3109",
      },
      company: {
        bs: "aggregate real-time technologies",
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
      },
      website: "conrad.com",
      username: "Delphine",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      address: {
        geo: { lat: "-38.2386", lng: "57.2232" },
        city: "Lebsackbury",
        suite: "Suite 198",
        street: "Kattie Turnpike",
        zipcode: "31428-2261",
      },
      company: {
        bs: "target end-to-end models",
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
      },
      website: "ambrose.net",
      username: "Moriah.Stanton",
    },
  ],
  contact: null,
  selectedContacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_CONTACT:
    //   return {
    //     ...state,
    //     contacts: action.payload,
    //   };
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let item = state.contacts.filter(
        (contact) => contact.id.toString() === action.payload
      );
      //transforming the array into object
      item = item.values();

      for (let val of item) {
        item = val;
      }
      return {
        ...state,
        contact: item,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      let result = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: result,
      };

    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: [...action.payload],
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    case DELETE_ALL_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    default:
      return state;
  }
};

export default contactReducer;
