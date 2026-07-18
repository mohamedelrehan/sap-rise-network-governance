import '@servicenow/sdk/global'
import {
  BooleanColumn,
  ChoiceColumn,
  DateColumn,
  StringColumn,
  Table,
} from '@servicenow/sdk/core'

export const x_1133115_sap_ri_0_architecture = Table({
  name: 'x_1133115_sap_ri_0_architecture',
  label: 'SAP RISE Architecture',
  display: 'name',

  schema: {
    name: StringColumn({
      label: 'Architecture Name',
      maxLength: 160,
      mandatory: true,
    }),

    number: StringColumn({
      label: 'Number',
      maxLength: 40,
      mandatory: true,
      unique: true,
    }),

    description: StringColumn({
      label: 'Description',
      maxLength: 4000,
    }),

    architecture_state: ChoiceColumn({
      label: 'Architecture State',
      choices: {
        current: {
          label: 'Current State',
          sequence: 100,
        },
        transition: {
          label: 'Transition State',
          sequence: 200,
        },
        target: {
          label: 'Target State',
          sequence: 300,
        },
      },
      default: 'current',
      mandatory: true,
    }),

    lifecycle_status: ChoiceColumn({
      label: 'Lifecycle Status',
      choices: {
        draft: {
          label: 'Draft',
          sequence: 100,
        },
        review: {
          label: 'In Review',
          sequence: 200,
        },
        approved: {
          label: 'Approved',
          sequence: 300,
        },
        retired: {
          label: 'Retired',
          sequence: 400,
        },
      },
      default: 'draft',
      mandatory: true,
    }),

    primary_region: ChoiceColumn({
      label: 'Primary Azure Region',
      choices: {
        west_europe: {
          label: 'West Europe',
          sequence: 100,
        },
        north_europe: {
          label: 'North Europe',
          sequence: 200,
        },
        not_applicable: {
          label: 'Not Applicable',
          sequence: 300,
        },
      },
      default: 'west_europe',
    }),

    disaster_recovery_region: ChoiceColumn({
      label: 'Disaster Recovery Region',
      choices: {
        north_europe: {
          label: 'North Europe',
          sequence: 100,
        },
        west_europe: {
          label: 'West Europe',
          sequence: 200,
        },
        not_applicable: {
          label: 'Not Applicable',
          sequence: 300,
        },
      },
      default: 'north_europe',
    }),

    system_connectivity: ChoiceColumn({
      label: 'System Connectivity',
      choices: {
        expressroute: {
          label: 'ExpressRoute',
          sequence: 100,
        },
        vpn: {
          label: 'VPN',
          sequence: 200,
        },
        private_link: {
          label: 'Private Link',
          sequence: 300,
        },
        none: {
          label: 'None',
          sequence: 400,
        },
      },
      default: 'expressroute',
    }),

    user_connectivity: ChoiceColumn({
      label: 'End-User Connectivity',
      choices: {
        ztna: {
          label: 'ZTNA',
          sequence: 100,
        },
        corporate_vpn: {
          label: 'Corporate VPN',
          sequence: 200,
        },
        corporate_network: {
          label: 'Corporate Network',
          sequence: 300,
        },
        none: {
          label: 'None',
          sequence: 400,
        },
      },
      default: 'ztna',
    }),

    sap_hosting_model: ChoiceColumn({
      label: 'SAP Hosting Model',
      choices: {
        data_centre: {
          label: 'Enterprise Data Centre',
          sequence: 100,
        },
        sap_rise: {
          label: 'SAP RISE',
          sequence: 200,
        },
      },
      default: 'data_centre',
      mandatory: true,
    }),

    architecture_owner: StringColumn({
      label: 'Architecture Owner',
      maxLength: 100,
    }),

    review_date: DateColumn({
      label: 'Review Date',
    }),

    approved: BooleanColumn({
      label: 'Architecture Approved',
      default: false,
    }),

    approval_notes: StringColumn({
      label: 'Approval Notes',
      maxLength: 4000,
    }),
  },

  index: [
    {
      name: 'architecture_number_unique',
      element: ['number'],
      unique: true,
    },
    {
      name: 'architecture_state_status',
      element: ['architecture_state', 'lifecycle_status'],
      unique: false,
    },
  ],
})
