import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '2b17705053a64bf7bd37134aee1f17f0'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '3c748977d891489d965d0f8a97754f80'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd007cf0e94504ddea7066e87356bd5c6'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9043778d76d34a228eb6213b6fcad4de'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'd8434ad5ec384ffda0aeec97d99584f1'
                    }
                }
            }
        }
    }
}
