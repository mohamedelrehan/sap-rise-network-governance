import '@servicenow/sdk/global'
import {
  ChoiceColumn,
  ReferenceColumn,
  StringColumn,
  Table,
} from '@servicenow/sdk/core'

export const x_1133115_sap_ri_0_request = Table({
  name: 'x_1133115_sap_ri_0_request',
  label: 'SAP RISE Request',
  display: 'number',

  schema: {

    number: StringColumn({
      label: 'Request Number',
      mandatory: true,
      unique: true,
      maxLength: 40,
    }),

    request_type: ChoiceColumn({
      label: 'Request Type',
      default: 'new',

      choices: {

        new: {
          label: 'New Connectivity',
          sequence: 100,
        },

        change: {
          label: 'Change',

          sequence: 200,
        },

        remove: {
          label: 'Remove',

          sequence: 300,
        },

      },
    }),

    connectivity: ReferenceColumn({

      label: 'Connectivity',

      referenceTable: 'x_1133115_sap_ri_0_connectivity',

      mandatory: true,

    }),

    requested_by: StringColumn({

      label: 'Requested By',

      maxLength: 120,

    }),

    status: ChoiceColumn({

      label: 'Status',

      default: 'draft',

      choices: {

        draft: {
          label: 'Draft',
          sequence: 100,
        },

        submitted: {
          label: 'Submitted',
          sequence: 200,
        },

        approved: {
          label: 'Approved',
          sequence: 300,
        },

        implemented: {
          label: 'Implemented',
          sequence: 400,
        },

        rejected: {
          label: 'Rejected',
          sequence: 500,
        },

      },

    }),

    comments: StringColumn({

      label: 'Comments',

      maxLength: 4000,

    }),

  },

  index: [

    {

      name: 'request_number_unique',

      element: ['number'],

      unique: true,

    },

  ],

})
