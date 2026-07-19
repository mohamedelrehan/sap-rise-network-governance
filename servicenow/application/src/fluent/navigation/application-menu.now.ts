import '@servicenow/sdk/global'
import { ApplicationMenu } from '@servicenow/sdk/core'

export const sapRiseNetworkGovernanceMenu = ApplicationMenu({
  $id: Now.ID['sap_rise_network_governance_menu'],

  title: 'SAP RISE Network Governance',

  name: 'SAP RISE Network Governance',

  hint: 'Manage SAP RISE network architecture, connectivity, governance, and deployment readiness',

  description:
    'Governance and automation for SAP RISE network connectivity and architecture.',

  order: 100,

  active: true,
})
