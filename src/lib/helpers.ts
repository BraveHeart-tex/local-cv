import { INTERNAL_SECTION_TYPES } from '@/lib/constants';
import {
  CONTAINER_TYPES,
  Field,
  FIELD_TYPES,
  Item,
  Section,
  SelectField,
} from '@/lib/schema';

interface ItemWithFields extends Omit<Item, 'id' | 'sectionId'> {
  fields: Omit<Field, 'id' | 'itemId'>[];
}

interface SectionWithFields extends Omit<Section, 'id'> {
  items: ItemWithFields[];
}

export const getInitialDocumentInsertBoilerplate = (
  documentId: number,
): SectionWithFields[] => {
  return [
    {
      documentId,
      title: 'Personal Details',
      type: INTERNAL_SECTION_TYPES.PERSONAL_DETAILS,
      items: [
        {
          containerType: CONTAINER_TYPES.STATIC,
          displayOrder: 1,
          fields: [
            {
              name: 'Wanted Job Title',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'First Name',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Last Name',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Email',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Phone',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Country',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'City',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Address',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Postal Code',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Driving License',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Place of Birth',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Date of Birth',
              type: FIELD_TYPES.STRING,
            },
          ].map((item) => ({ ...item, value: '' })),
        },
      ],
    },
    {
      documentId,
      title: 'Professional Summary',
      type: INTERNAL_SECTION_TYPES.PROFESSIONAL_SUMMARY,
      items: [
        {
          containerType: CONTAINER_TYPES.STATIC,
          displayOrder: 1,
          fields: [{ name: '', type: FIELD_TYPES.RICH_TEXT, value: '' }],
        },
      ],
    },
    {
      documentId,
      title: 'Employment History',
      type: INTERNAL_SECTION_TYPES.EMPLOYMENT_HISTORY,
      items: [
        {
          containerType: CONTAINER_TYPES.COLLAPSIBLE,
          displayOrder: 1,
          fields: [
            {
              name: 'Job Title',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Start Date',
              type: FIELD_TYPES.DATE_MONTH,
            },
            {
              name: 'End Date',
              type: FIELD_TYPES.DATE_MONTH,
            },
            {
              name: 'Employer',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'City',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Description',
              type: FIELD_TYPES.RICH_TEXT,
            },
          ].map((item) => ({ ...item, value: '' })),
        },
      ],
    },
    {
      documentId,
      title: 'Education',
      type: INTERNAL_SECTION_TYPES.EDUCATION,
      items: [
        {
          containerType: CONTAINER_TYPES.COLLAPSIBLE,
          displayOrder: 1,
          fields: [
            {
              name: 'School',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Degree',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Start Date',
              type: FIELD_TYPES.DATE_MONTH,
            },
            {
              name: 'End Date',
              type: FIELD_TYPES.DATE_MONTH,
            },
            {
              name: 'City',
              type: FIELD_TYPES.STRING,
            },
            {
              name: 'Description',
              type: FIELD_TYPES.RICH_TEXT,
            },
          ].map((item) => ({
            ...item,
            value: '',
          })),
        },
      ],
    },
    {
      documentId,
      title: 'Websites & Social Links',
      type: INTERNAL_SECTION_TYPES.WEBSITES_SOCIAL_LINKS,
      items: [
        {
          containerType: CONTAINER_TYPES.COLLAPSIBLE,
          displayOrder: 1,
          fields: [
            {
              name: 'Label',
              type: FIELD_TYPES.STRING,
              value: '',
            },
            {
              name: 'Link',
              type: FIELD_TYPES.STRING,
              value: '',
            },
          ],
        },
      ],
    },
    {
      documentId,
      title: 'Skills',
      type: INTERNAL_SECTION_TYPES.SKILLS,
      metadata: JSON.stringify({
        showExperienceLevel: true,
      }),
      items: [
        {
          containerType: CONTAINER_TYPES.COLLAPSIBLE,
          displayOrder: 1,
          fields: [
            {
              name: 'Skill',
              type: FIELD_TYPES.STRING,
              value: '',
            },
            {
              name: 'Experience Level',
              type: FIELD_TYPES.STRING,
              selectType: 'basic',
              options: ['Beginner', 'Competent', 'Proficient', 'Expert'],
              value: '',
            },
          ],
        },
      ],
    },
  ].map((item, index) => ({
    ...item,
    defaultTitle: item.title,
    displayOrder: index + 1,
  }));
};

export const isSelectField = (obj: { type: string }): obj is SelectField => {
  return obj?.type === FIELD_TYPES.SELECT;
};

export const getFieldHtmlId = (field: Field) => {
  return `${field.itemId}-${field.name}`;
};
