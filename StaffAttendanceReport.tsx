import React, { useState } from 'react';

// --- UTILITY FUNCTIONS ---
/**
 * Converts YYYY-MM-DD date format (used in input[type="date"] and Item)
 * to DD-MM-YYYY format for display in the table.
 * @param dateString - Date string in 'YYYY-MM-DD' format.
 * @returns Date string in 'DD-MM-YYYY' format.
 */
const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return '';
    try {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    } catch (error) {
        console.error("Error formatting date:", error);
        return dateString;
    }
};

// --- TYPE DEFINITIONS for TypeScript ---
interface FilterState {
    staffName: string;
    role: string;
    status: string;
    zooName: string;
    startDate: string;
    endDate: string;
}

interface Item {
    staffName: string;
    role: string;
    status: string;
    leaveType: string;
    substitute: string;
    zooName: string;
    date: string;
}

interface SelectFilterProps {
    label: string;
    options: string[];
    filterKey: keyof FilterState;
    filters: FilterState;
    handleFilterChange: (key: keyof FilterState, value: string) => void;
}

// --- MOCK DATA ---
const mockData: Item[] = [
    { staffName: 'Alice Johnson', role: 'Zookeeper', status: 'Present', leaveType: 'N/A', substitute: 'N/A', zooName: 'Zoo A', date: '2025-12-05' },
    { staffName: 'Bob Smith', role: 'Vet Tech', status: 'Absent', leaveType: 'Sick Leave', substitute: 'Dr. Emily', zooName: 'Zoo B', date: '2025-12-10' },
    { staffName: 'Charlie Brown', role: 'Veterinarian', status: 'On Leave', leaveType: 'Vacation', substitute: 'Dr. Lee', zooName: 'Wildlife Reserve C', date: '2025-12-15' },
    { staffName: 'Dana Scully', role: 'Admin', status: 'Present', leaveType: 'N/A', substitute: 'N/A', zooName: 'Zoo A', date: '2025-12-20' },
    { staffName: 'Ethan Hunt', role: 'Zookeeper', status: 'Absent', leaveType: 'Emergency', substitute: 'Jane Doe', zooName: 'Zoo B', date: '2025-12-25' },
];

// --- CONSTANTS ---
const zooOptions = ['All', 'Zoo A', 'Zoo B', 'Wildlife Reserve C'];
const roleOptions = ['All', 'Zookeeper', 'Veterinarian', 'Vet Tech', 'Admin'];
const statusOptions = ['All', 'Present', 'Absent', 'On Leave'];

// Table headers remain the same
const tableHeaders = [
    { key: 'date', label: 'Date' }, 
    { key: 'staffName', label: 'Staff Name' },
    { key: 'role', label: 'Role' },
    { key: 'zooName', label: 'Zoo Name' },
    { key: 'status', label: 'Status' },
    { key: 'leaveType', label: 'Leave Type' },
    { key: 'substitute', label: 'Substitute Assigned' },
];

// --------------------------------------------------------------------------
// Reusable Select Filter Component (Outside main component)
// --------------------------------------------------------------------------
const SelectFilter: React.FC<SelectFilterProps> = ({ label, options, filterKey, filters, handleFilterChange }) => (
    <div className="flex flex-col">
        <label className="text-xs font-medium text-gray-500 mb-1">{label}</label>
        <select 
            value={filters[filterKey] as string} 
            onChange={(e) => handleFilterChange(filterKey, e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
);

// --- MAIN INTEGRATED COMPONENT ---
const StaffAttendanceReport: React.FC = () => {
    
    const [filters, setFilters] = useState<FilterState>({
        staffName: '',
        role: 'All',
        status: 'All',
        zooName: 'All',
        startDate: '2025-12-01', 
        endDate: '2025-12-31',
    });

    const [dateError, setDateError] = useState<string | null>(null);

    // 🔥 MODIFIED: Added logic for date validation
    const handleFilterChange = (key: keyof FilterState, value: string) => {
        setFilters(prev => {
            const newFilters = { ...prev, [key]: value };

            // Reset error state initially
            setDateError(null);

            // --- DATE VALIDATION LOGIC ---
            if (key === 'startDate' || key === 'endDate') {
                const newStartDate = key === 'startDate' ? value : prev.startDate;
                const newEndDate = key === 'endDate' ? value : prev.endDate;

                const start = new Date(newStartDate);
                const end = new Date(newEndDate);

                // Check if the change causes endDate < startDate
                if (start > end) {
                    setDateError('End Date cannot be before Start Date.');
                    
                    // Prevent state update for the conflicting date, and reset the other date if necessary.
                    // This logic enforces the rule, automatically correcting the state.
                    if (key === 'startDate') {
                        return { ...prev, startDate: value, endDate: value }; // Reset end date to match new start date
                    } else {
                        return { ...prev, endDate: value, startDate: value }; // Reset start date to match new end date
                    }
                }
            }
            
            return newFilters;
        });
    };

    // --- FILTERING LOGIC: COMBINED DATE AND CATEGORICAL FILTERS ---
    const filteredData = mockData.filter(item => {
        
        // 1. Categorical/Text filters
        const matchesCategoricalFilters = (
            (filters.zooName === 'All' || item.zooName === filters.zooName) &&
            (filters.role === 'All' || item.role === filters.role) &&
            (filters.status === 'All' || item.status === filters.status) &&
            (item.staffName.toLowerCase().includes(filters.staffName.toLowerCase()))
        );

        // 2. Filter by Date Range
        // Use the YYYY-MM-DD format for date comparisons
        const itemDate = new Date(item.date);
        const start = new Date(filters.startDate);
        const end = new Date(filters.endDate);
        
        // Adjust end date to include the whole day (remains necessary)
        end.setDate(end.getDate() + 1);

        const matchesDateRange = itemDate >= start && itemDate < end;

        return matchesCategoricalFilters && matchesDateRange; 
    });

    // Helper to determine the status badge style
    const getStatusStyle = (status: string) => {
        switch(status) {
            case 'Present': return 'bg-green-100 text-green-800';
            case 'Absent': return 'bg-red-100 text-red-800';
            case 'On Leave': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    
    // --- RENDER ---
    return (
        <div className="p-6 bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                
                {/* 1. HEADER */}
                <div className="p-4 md:p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center">
                                <i className="fas fa-users mr-3 text-indigo-600"></i>
                                Staff Attendance Report
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">Expanded Multi-Zoo Analytics</p>
                        </div>
                        
                        {/* Date Range Input Fields */}
                        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <div className="flex flex-col">
                                <label className="text-xs font-medium text-gray-500 mb-1">Start Date</label>
                                <input 
                                    type="date" 
                                    // Value remains YYYY-MM-DD for input[type="date"] compatibility
                                    value={filters.startDate} 
                                    onChange={(e) => handleFilterChange('startDate', e.target.value)}
                                    className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs font-medium text-gray-500 mb-1">End Date</label>
                                <input 
                                    type="date" 
                                    // Value remains YYYY-MM-DD for input[type="date"] compatibility
                                    value={filters.endDate} 
                                    onChange={(e) => handleFilterChange('endDate', e.target.value)}
                                    className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Date Validation Error Message */}
                    {dateError && (
                        <p className="mt-3 text-sm font-medium text-red-600 text-right">
                            <i className="fas fa-exclamation-triangle mr-2"></i>{dateError}
                        </p>
                    )}
                </div>

                {/* 2. FILTER CONTROLS */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 border-b border-gray-200 bg-gray-50">
                    
                    <SelectFilter 
                        label="Zoo Name" 
                        options={zooOptions} 
                        filterKey="zooName" 
                        filters={filters} 
                        handleFilterChange={handleFilterChange} 
                    />
                    
                    <div className="flex flex-col">
                        <label className="text-xs font-medium text-gray-500 mb-1">Staff Name</label>
                        <input 
                            type="text"
                            placeholder="Search Staff Name"
                            value={filters.staffName}
                            onChange={(e) => handleFilterChange('staffName', e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    
                    <SelectFilter 
                        label="Role" 
                        options={roleOptions} 
                        filterKey="role" 
                        filters={filters} 
                        handleFilterChange={handleFilterChange} 
                    />
                    
                    <SelectFilter 
                        label="Attendance Status" 
                        options={statusOptions} 
                        filterKey="status" 
                        filters={filters} 
                        handleFilterChange={handleFilterChange} 
                    />

                    <div className="flex items-end pt-2 md:pt-0">
                        <button 
                            onClick={() => setFilters(prev => ({ 
                                staffName: '', 
                                role: 'All', 
                                status: 'All', 
                                zooName: 'All', 
                                // Preserve current dates when clearing categorical filters
                                startDate: prev.startDate, 
                                endDate: prev.endDate 
                            }))}
                            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition duration-150"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                {/* Export Button */}
                <div className="flex justify-end p-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-150 shadow-md">
                        <i className="fas fa-file-export mr-2"></i> Export CSV ({filteredData.length} records)
                    </button>
                </div>

                {/* 3. ATTENDANCE TABLE */}
                <div className="overflow-x-auto p-4 pt-0">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {tableHeaders.map((header) => (
                                    <th 
                                        key={header.key} 
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index} className="hover:bg-indigo-50">
                                        {/* 🔥 MODIFIED: Apply formatting here */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-normal">
                                            {formatDateForDisplay(item.date)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.staffName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-semibold">{item.zooName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.leaveType}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.substitute}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={tableHeaders.length} className="px-6 py-8 text-center text-sm text-gray-500">
                                        No attendance records found matching the current filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StaffAttendanceReport;