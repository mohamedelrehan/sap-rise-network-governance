# SAP RISE Network Governance

A code-defined proof of concept for governing and automating the SAP RISE
network transformation through ServiceNow.

## Scope

The current SAP environment is hosted in the enterprise data centre.

The target architecture provides:

- Azure Virtual WAN in an existing customer Azure subscription
- Primary Virtual WAN hub in West Europe
- Disaster recovery Virtual WAN hub in North Europe
- One Azure Firewall in each hub
- SAP RISE PROD and NON-PROD connectivity in West Europe
- SAP RISE PROD DR and NON-PROD DR connectivity in North Europe
- ExpressRoute for system-to-system connectivity
- ZTNA for end-user access
- ServiceNow architecture governance and approvals
- Terraform-based Azure deployment
- CMDB and architecture compliance updates

## Ownership

Customer-managed:

- Azure Virtual WAN
- Virtual WAN hubs
- Azure Firewalls
- Firewall policy
- Routing
- ExpressRoute integration
- Logging and diagnostics
- ServiceNow governance
- Terraform automation

SAP-managed:

- SAP RISE subscriptions
- SAP PROD and NON-PROD environments
- SAP PROD DR and NON-PROD DR environments
- SAP-side network resources

## Repository Areas

- `servicenow/` — scoped application, scripts, data and integrations
- `terraform/` — Azure Virtual WAN landing-zone code
- `azure-devops/` — pipeline definitions
- `docs/` — architecture and decisions
- `diagrams/` — architecture source diagrams
