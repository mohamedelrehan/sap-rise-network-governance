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
                        deleted: true
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd007cf0e94504ddea7066e87356bd5c6'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9043778d76d34a228eb6213b6fcad4de'
                    }
                    sap_rise_network_governance_menu: {
                        table: 'sys_app_application'
                        id: 'ff01c53060ff4287a21903e8787124ff'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'd8434ad5ec384ffda0aeec97d99584f1'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_choice_set'
                        id: '012b3f13193947cebf2b3027e974fe17'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '01478c346c7c486084ab8199a1285f84'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'primary_region'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0341d2a12ca74588bda3f31595fa94c8'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'connectivity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06afb7609efe449ab02d188eeb901fb6'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'request_type'
                            value: 'remove'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08864c4f12ad4efba835cdfbcd475592'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cac801551a345308e7d67fc3eff51fc'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_state'
                            value: 'transition'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d6f66b9fd3846e190a31ca7e85faeee'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f1a9f2467b14e2d98914f99e0d3d9c3'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'sap_hosting_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1040833f63bf45c39df12cfc1bee3717'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '10bf1f2d39d14930b3338d669b17b0a7'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1352f7feafd6461487622645978ca337'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                            value: 'ztna'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14ea2859fea841b3ba557eed75c2429b'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '177d035db18b42e4882b711fe76b3444'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'approved'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '17c6b95e362b4025b90cb54d07931ee8'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '188a772a97124d84b272e6633a88a1b5'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18b5c5b294e84736920fd31f73162c95'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                            value: 'none'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a643eebbf4e406aaaff1e226337fd22'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'primary_region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a9d5306a7ae4cd0b9db47845ac413d3'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'destination'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c3dc5cfc6ce4fed8376a1e477b0dae8'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                            value: 'planned'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1c7ffab77f8e44859fe7fd5580dc24fa'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2583599c806b43eba5b78ff5ae9b9b32'
                        key: {
                            logical_table_name: 'x_1133115_sap_ri_0_architecture'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2966e5ab28c444879d5a90af82d91228'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'architecture'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2d49df371aaa4d5bbfc242bd0ea031bd'
                        key: {
                            logical_table_name: 'x_1133115_sap_ri_0_request'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3421939aee434e11b5a63a60531a258b'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34f32864a65b4a1584e0171f23f88591'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'sap_hosting_model'
                            value: 'sap_rise'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36907b011c6d4b969d38e508aa1546b3'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                            value: 'corporate_vpn'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36aae3f4f431488ab7cc92555fee02f9'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3789adf60c294658b54ae73f0ac1c9ff'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'primary_region'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3b1b11cb94c445f987c42b83b293748a'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d34a07d74994763892d503ec880a2a6'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e9828fff610424497570bad7fa82524'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40bd24b08ff3477287f4b45ef94c9615'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'approved'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '439025a558cb44d3899a2c5b0b7d4d75'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'disaster_recovery_region'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44dcc315794d4132811520a166f4c6ba'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                            value: 'expressroute'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44ec7c95b087477e8d209249a4a83d02'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '450a149f019c4dbe88a95dfc3f59948f'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'disaster_recovery_region'
                            value: 'west_europe'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '45d7826b3bd84babb140a0e4edcf904e'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46cb66424b5142a0970961396d7b77f9'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a53f916c4844f68b20418533a1de1d9'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'sap_hosting_model'
                            value: 'data_centre'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c28f46acf4742d1b38887fad4917b15'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_owner'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c3f908f7060496ea9b94ea96553e9e5'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                            value: 'vwan'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d0022c4dad14187a0437f25b5da3a63'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52aaf69d34f04b809a3abcff57fd5bd5'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                            value: 'vpn'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '568aef28e21c455eb61e71a45a347e59'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'review_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5a18d3eddf034f0fa675c9fa09fd95ba'
                        key: {
                            logical_table_name: 'x_1133115_sap_ri_0_architecture'
                            col_name_string: 'architecture_state,lifecycle_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c10bb6e973d48a69b2cda72937c2d79'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ee2e32639944e8c9f5062a205dce66b'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5fe79b3cfdd84ba4bfb0ada44b21eac8'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '645ead965942423e9a2a610ad5e78ec6'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66b65165338d4750ac9ad0ac55e9872d'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6840d52acab44ae29482735572ab9f06'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dc67763ad094d27be66ff77423ba68d'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7398c41a1346494b9572314e808545aa'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7430ff5126e94309ab8233fed7a0f067'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7529a79268e541ec99f79a88de32ed71'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                            value: 'private_link'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7580e1cddb974c08bfd375336030da4d'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75a4002296844ca0a96611c443752c91'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                            value: 'none'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76db66992589414e96735006bc3044dd'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'request_type'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77ef94f0f9cf49c88f3cc4e9d38cce1d'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78e40e5256e24099adf9789c8bc8b346'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                            value: 'expressroute'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c2d614a1bb94a0ba62c4ccb2222f401'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80aa939ca4d940fbbbf88ce7fbfcda0d'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83d04ed8d5d7447d82011b6d6baa43e0'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'comments'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '883580a437234ddfaf8408c4fb933636'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'disaster_recovery_region'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '886b0109f61047a1bd212ba46d497cc9'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b79b289da15415bb90313af2d7d1dd7'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8e460ce54d8348f1839aa036b7ead597'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f16dac6917e4b01a6f3a9d0e821c8d4'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '909290e5223c4702978704f0d2919ec3'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'connectivity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '92c071ca97534e98a7605e4be9ed3109'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95718ead20f741c7bfcdb6d4d4bb3ebd'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                            value: 'deploying'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '965f536db9704fb6a2dfbe6990d1db76'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'disaster_recovery_region'
                            value: 'not_applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98157c0428024de09c178e0a0112fb5a'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9835459017684aba8bbad3ad8f1e97b2'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'architecture'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '986e8e62aa964b52bfe17bec2e054c37'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_state'
                            value: 'current'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ef0871547144abd895cc6e5945b6ddd'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                            value: 'private_link'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0ac22be3aeb42659fb433cc1fab0207'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_state'
                            value: 'target'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1134ce778a14192aed400f3d787fa7a'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a53c042f48f24f16ac406dacfbff4f76'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6561076613a455bbaab760d4530491c'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a77063645bb5438b9e9cd887f2bb2f52'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                            value: 'ztna'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7d27a5c61a341bf8e1969565ec5e0ae'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a7e44d377d374c00a018da2524a1f1bb'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a9cabce625b6415a8f983204dfa6ad75'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'acba1e70d3574e8982e510d411dd6bc0'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b17f11119a7847e797ecb99de741368e'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2b80c0ee3744bf5bbd8f50bd5ca387d'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2fdeefe9c9d41f5936f6aaeaf0b3b5e'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'approval_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6d8edbee10a4575b69cb3ca4f0840b1'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b776393791db40c0b7749386eed10c37'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_state'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bbd08be7021e424f9c044daba4d80d27'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bdd2990a2b094d01988dd5e2a230316a'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                            value: 'corporate_network'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c11e5acbf83d48968fac230df0b6a9f1'
                        key: {
                            logical_table_name: 'x_1133115_sap_ri_0_connectivity'
                            col_name_string: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c182c1ab69444daa8d41a398c7d5763d'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'architecture_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6c688434b9448cb9fdc3051b40f9ff7'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8da31df53424ba2b67788b046d29c54'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc85a305899a4b65a1d59c7f8e7d2358'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'primary_region'
                            value: 'north_europe'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd30ffe8891d424ba2053b304a67c3d8'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'primary_region'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd549a84bebf40108cab4302d7b76bcf'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf20b26170f845c39205d6b2f4a8152a'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'disaster_recovery_region'
                            value: 'north_europe'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0a9d1cce97f4f9cbe32323b122a1680'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'destination'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd1c4037c1d504623b9ac15b09eac30cd'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                            value: 'vpn'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8f92be3d39643ed80e38fc3d5f9522b'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dbb039d19109477bafbd6f17c1367031'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'status'
                            value: 'operational'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc8d62da370b4c2288dce64033e600a7'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'lifecycle_status'
                            value: 'review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de2b1be0dd41457fb58ddff82a88f632'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'disaster_recovery_region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de8f9de0611746b1a31b45c8458b61d7'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'approval_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'debf27a399d24cb8850326e3c36dfdb6'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e3459264a70d469d9d45a6d0b9dae021'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'sap_hosting_model'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6aed3cfd5504ee09c52c3497825ea10'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'review_date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e87ec0ebf60d44039cd5c2d1bb071bfb'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb660f4ec4c04b68bc8672bf9de59962'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ebb708450a2d4769bc49ee6fe2f97181'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'sap_hosting_model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebd7075874d14ed5a921473a8f9e3457'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ec3dc86cb02c475ab5ac298777cd3894'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'request_type'
                            value: 'change'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efeb37b045d3402fa6ba566acdd626e5'
                        key: {
                            name: 'x_1133115_sap_ri_0_request'
                            element: 'status'
                            value: 'implemented'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f143c5eeaaf7428aba48e468085f718b'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f3ffb0678aa4428881beee32c94b8b33'
                        key: {
                            name: 'x_1133115_sap_ri_0_connectivity'
                            element: 'connectivity_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f9d722fd625643a7bf117271aa7d8657'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'primary_region'
                            value: 'west_europe'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fbc545d01aa043198855bc7b3fcdf616'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'user_connectivity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd53bab57c954663b474132075a63a86'
                        key: {
                            name: 'x_1133115_sap_ri_0_architecture'
                            element: 'system_connectivity'
                        }
                    },
                ]
            }
        }
    }
}
