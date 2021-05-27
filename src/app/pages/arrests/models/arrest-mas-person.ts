export interface ArrestMasPerson {
  PERSON_ID: number;
  PERSON_TYPE: number;
  ENTITY_TYPE: number;
  ID_CARD: string;
  PASSPORT_NO: string;
  COMPANY_REGISTRATION_NO: string;
  TITLE_NAME_TH: string;
  TITLE_NAME_EN: string;
  TITLE_SHORT_NAME_TH: string;
  TITLE_SHORT_NAME_EN: string;
  FIRST_NAME: string;
  MIDDLE_NAME: string;
  LAST_NAME: string;
  OTHER_NAME: string;
  COMPANY_NAME: string;
  MISTREAT_NO: number;
  RELATIONSHIP_NAME: string;
  ArrestMasPersonRelationship?: ArrestMasPersonRelationship[];
  ///== Customs ==///
  FATHER_NAME: string;
  MATHER_NAME: string;
}

export interface ArrestMasPersongetByConAdv {
  PERSON_TYPE: number;
  ENTITY_TYPE: number;
  ID_CARD: string;
  PASSPORT_NO: string;
  COMPANY_REGISTRATION_NO: string;
  PERSON_NAME: string;
  AGENT_NAME: string;
  FATHER_NAME: string;
  MOTHER_NAME: string;
}

export interface ArrestMasPersonRelationship {
  PERSON_RELATIONSHIP_ID?: number;
  RELATIONSHIP_ID?: number;
  PERSON_ID?: number;
  RELATIONSHIP_NAME: string;
  TITLE_NAME_TH: string;
  TITLE_NAME_EN: string;
  TITLE_SHORT_NAME_TH: string;
  TITLE_SHORT_NAME_EN: string;
  FIRST_NAME: string;
  MIDDLE_NAME: string;
  LAST_NAME: string;
  OTHER_NAME: string;
}

export class Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Hero {
  id: number;
  name: string;
}

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export const ArrestMasPersonMock: any[] = [
  {
    PERSON_ID: 15,
    PERSON_TYPE: 0,
    ENTITY_TYPE: 0,
    ID_CARD: "15713000012345",
    PASSPORT_NO: null,
    COMPANY_REGISTRATION_NO: null,
    TITLE_NAME_TH: "นาย",
    TITLE_NAME_EN: "Mister",
    TITLE_SHORT_NAME_TH: "นาย",
    TITLE_SHORT_NAME_EN: "Mr.",
    FIRST_NAME: "ทดสอบ",
    MIDDLE_NAME: null,
    LAST_NAME: "นามสกุล",
    OTHER_NAME: null,
    MISTREAT_NO: 0,
    ArrestMasPersonRelationship: [],
  },
  {
    PERSON_ID: 1,
    PERSON_TYPE: 0,
    ENTITY_TYPE: 0,
    ID_CARD: "15713000012345",
    PASSPORT_NO: null,
    COMPANY_REGISTRATION_NO: null,
    TITLE_NAME_TH: "นาย",
    TITLE_NAME_EN: "Mister",
    TITLE_SHORT_NAME_TH: "นาย",
    TITLE_SHORT_NAME_EN: "Mr.",
    FIRST_NAME: "ธนากร",
    MIDDLE_NAME: null,
    LAST_NAME: "วิเศษแก้ว",
    OTHER_NAME: null,
    MISTREAT_NO: 4,
    ArrestMasPersonRelationship: [
      {
        PERSON_RELATIONSHIP_ID: 1,
        RELATIONSHIP_ID: 1,
        PERSON_ID: 1,
        RELATIONSHIP_NAME: "นาย ลัดดา  วิเศษแก้ว",
        TITLE_NAME_TH: "นาย",
        TITLE_NAME_EN: "Mister",
        TITLE_SHORT_NAME_TH: "นาย",
        TITLE_SHORT_NAME_EN: "Mr.",
        FIRST_NAME: "ลัดดา",
        MIDDLE_NAME: null,
        LAST_NAME: "วิเศษแก้ว",
        OTHER_NAME: null,
      },
    ],
  },
];
