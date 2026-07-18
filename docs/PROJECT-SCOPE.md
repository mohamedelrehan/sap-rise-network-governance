# Project Scope

## Project Name

SAP RISE Network Governance

## Current State

- SAP is hosted in the enterprise data centre.
- Enterprise systems connect to SAP through the data-centre network.
- End users access SAP through the corporate network or VPN.

## Target State

### West Europe

- Primary Azure Virtual WAN hub
- Azure Firewall
- SAP RISE PROD connectivity
- SAP RISE NON-PROD connectivity

### North Europe

- Disaster-recovery Azure Virtual WAN hub
- Azure Firewall
- SAP RISE PROD DR connectivity
- SAP RISE NON-PROD DR connectivity

### Connectivity

- ExpressRoute for system-to-system traffic
- ZTNA for end-user traffic

## Automation Scope

ServiceNow will:

1. Store the current and target architecture.
2. Manage architecture approval.
3. Accept the deployment request.
4. Create or associate a change record.
5. Trigger Terraform validation and planning.
6. request deployment approval.
7. Trigger Terraform deployment.
8. receive deployment results.
9. Update CMDB records.
10. Record architecture compliance.

## Azure Deployment Scope

Terraform will create customer-managed resources only:

- Azure Virtual WAN
- West Europe Virtual Hub
- North Europe Virtual Hub
- Azure Firewall in West Europe
- Azure Firewall in North Europe
- Azure Firewall Policy
- Hub route tables
- Diagnostics and logging

SAP-managed subscriptions and SAP-side resources are outside the Terraform scope.
