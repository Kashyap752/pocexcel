import { SheetDescriptor } from '@progress/kendo-angular-spreadsheet';

export const DMSheets: SheetDescriptor[] = [
    {
        name: 'Standard Package',
        rows: [
            {
                height: 25,
                cells: [
                    {
                        value: 'Task',
                        textAlign: 'center',
                        bold: true,
                    },
                    {
                        value: 'Duration',
                        textAlign: 'center',
                        bold: true,
                    },
                    {
                        value: 'Start',
                        textAlign: 'center',
                        bold: true,
                    },
                    {
                        value: 'Finish',
                        textAlign: 'center',
                        bold: true,
                    }
                ],
            },
            {
                cells: [
                    {
                        value: "Client Kick Off / SOW Signed / Campaign Matrix Approved",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: "",
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C2, B2-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Internal Creative Kick Off",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D2, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C3, B3-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Creative Concept development",
                        textAlign: 'center',
                    },
                    {
                        value: 4,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D3, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C4, B4-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Internal Review Concept",
                        textAlign: 'center',
                    },
                    {
                        value: 2,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D4, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C5, B5-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Present Concept(s) to Client / Client Gives Feedback",
                        textAlign: 'center',
                    },
                    {
                        value: 2,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D5, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C6, B6-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Creative Development",
                        textAlign: 'center',
                    },
                    {
                        value: 6,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D6, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C7, B7-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Internal Review/Alterations",
                        textAlign: 'center',
                    },
                    {
                        value: 2,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D7, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C8, B8-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Fully Executed Creative Presented to Client",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D8, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C9, B9-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Client reviews creative - Round 1",
                        textAlign: 'center',
                    },
                    {
                        value: 3,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D9, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C10, B10-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "SeQuel adjusts creative - sends pdfs",
                        textAlign: 'center',
                    },
                    {
                        value: 2,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D10, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C11, B11-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Client reviews - Round 2",
                        textAlign: 'center',
                    },
                    {
                        value: 3,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D11, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C12, B12-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Envelope art approval - release to production",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D17, -6, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C13, B13-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "SeQuel adjusts - sends pdfs",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D12, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C14, B14-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Client reviews - Final approval",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        // formula:'=WORKDAY(D14, 1, hol!A:A)',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C15, B15-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Generate Informed Delivery Ads - Release to production",
                        textAlign: 'center',
                    },
                    {
                        value: 4,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D15, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C16, B16-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Preflight - Release to Production (before noon)",
                        textAlign: 'center',
                    },
                    {
                        value: 2,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D15, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C17, B17-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Customer file for modeling/Suppression file/Leads/DNC/State Omits due to SeQuel",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D3, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C18, B18-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Data Management",
                        textAlign: 'center',
                    },
                    {
                        value: 27,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D18, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C19, B19-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Data Due to Production (before noon)",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D19, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C20, B20-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Postage Invoice Due to Client",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D22, -25, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C21, B21-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Postage Due to SeQuel",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D23, -10, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C22, B22-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Print production",
                        textAlign: 'center',
                    },
                    {
                        value: 15,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D17, 1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C23, B23-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "In Home Window",
                        textAlign: 'center',
                    },
                    {
                        value: 3,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(D23, 9, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY.INTL(C24, B24-1, 11,hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Send samples",
                        textAlign: 'center',
                    },
                    {
                        value: 1,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C24, 4, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C25, B25-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            {
                cells: [
                    {
                        value: "Initiate invoicing - Send final invoice",
                        textAlign: 'center',
                    },
                    {
                        value: 2,
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C24, 4, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                    {
                        value: '',
                        formula:'=WORKDAY(C26, B26-1, hol!A:A)',
                        format: 'dd-MM-yyyy',
                        textAlign: 'center',
                    },
                ],
            },
            
        ],
        columns: [
            {
                width: 400,
            },
            {
                width: 110,
            },
            {
                width: 110,
            },
            {
                width: 110,
            },
        ],
    },
    {
        name: 'hol',
        rows:[
            {
                cells:[
                    {
                        value: '2023-11-23',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value:'2023-11-24',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2023-12-22',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2023-12-25',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-01-01',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-01-15',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-02-19',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-05-27',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-06-19',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-07-04',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-09-02',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-11-28',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-11-29',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-12-24',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2024-12-25',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
            {
                cells:[
                    {
                        value: '2025-01-01',
                        format: 'dd-MM-yyyy',
                    }
                ]
            },
        ],
        columns:[
            {
                width: 110,
            }
        ]
    },
];