import '@servicenow/sdk/global'
import {
  ChoiceColumn,
  ReferenceColumn,
  StringColumn,
  Table,
} from '@servicenow/sdk/core'

export const x_1133115_sap_ri_0_connectivity = Table({
  name: 'x_1133115_sap_ri_0_connectivity',
  label: 'SAP RISE Connectivity',
  display: 'name',

  schema: {
    number: StringColumn({
      label: 'Number',
      mandatory: true,
      unique: true,
      maxLength: 40,
    }),

    name: StringColumn({
      label: 'Name',
      mandatory: true,
      maxLength: 160,
    }),

    architecture: ReferenceColumn({
      label: 'Architecture',
      referenceTable: 'x_1133115_sap_ri_0_architecture',
      mandatory: true,
    }),

    connectivity_type: ChoiceColumn({
      label: 'Connectivity Type',
      default: 'expressroute',
      choices: {
        expressroute: {
          label: 'ExpressRoute',
          sequence: 100,
        },
        vwan: {
          label: 'Azure Virtual WAN',
          sequence: 200,
        },
        vpn: {
          label: 'VPN',
          sequence: 300,
        },
        ztna: {
          label: 'ZTNA',
          sequence: 400,
        },
        private_link: {
          label: 'Private Link',
          sequence: 500,
        },
      },
    }),

    source: StringColumn({
      label: 'Source',
      maxLength: 120,
    }),

    destination: StringColumn({
      label: 'Destination',
      maxLength: 120,
    }),

    status: ChoiceColumn({
      label: 'Status',
      default: 'planned',
      choices: {
        planned: {
          label: 'Planned',
          sequence: 100,
        },
        deploying: {
          label: 'Deploying',
          sequence: 200,
        },
        operational: {
          label: 'Operational',
          sequence: 300,
        },
        retired: {
          label: 'Retired',
          sequence: 400,
        },
      },
    }),
  },

  index: [
    {
      name: 'connectivity_number_unique',
      element: ['number'],
      unique: true,
    },
  ],
})
