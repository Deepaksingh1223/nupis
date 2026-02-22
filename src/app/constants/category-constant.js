export const Columns = [
    {
        field: "serialNumber",
        header: "S.No",
        sortable: false,
        width: "8%",
        render: (rowData, actions, index) => {
            return index + 1;
        }
    },
    {
        field: "categoryName",
        header: "Category Name",
        sortable: true,
        width: "30%"
    },
    {
        field: "status",
        header: "Status",
        sortable: true,
        width: "15%",
        render: (rowData) => {
            const isActive = rowData.status === "Active" ? "Active" : "";
            return isActive ? (
                <span style={{ 
                    color: '#10B981', 
                    backgroundColor: '#D1FAE5', 
                    padding: '4px 8px', 
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                }}>
                    Active
                </span>
            ) : (
                <span style={{ 
                    color: '#EF4444', 
                    backgroundColor: '#FEE2E2', 
                    padding: '4px 8px', 
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                }}>
                    Deactivated
                </span>
            );
        }
    },
    {
        field: "actions",
        header: "Actions",
        sortable: false,
        width: "25%",
        render: (rowData, actions, index) => {
            const isActive = rowData.status === "Active";
            return actions ? (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        onClick={() => actions.onEdit(rowData, index)}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#3B82F6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => actions.onDelete(rowData, index)}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: isActive ? '#EF4444' : '#10B981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        {isActive ? 'Deactivate' : 'Activate'}
                    </button>
                </div>
            ) : null;
        }
    }
];

