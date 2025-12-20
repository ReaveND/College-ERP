import React, { useState } from 'react';

// --- TYPE DEFINITIONS for TypeScript ---
interface SupervisorReportItem {
    id: number;
    supervisorName: string;
    zooName: string;
    date: string; // YYYY-MM-DD
    zonesCovered: number;
    randomChecksDone: number;
    sincerityRating: number; // 1 to 5
    feedbackScore: number; // Percentage
}

interface FilterState {
    supervisorName: string;
    zooName: string;
    startDate: string;
    endDate: string;
}

// --- MOCK DATA ---
const mockData: SupervisorReportItem[] = [
    { id: 1, supervisorName: 'David Lee', zooName: 'Zoo A', date: '2025-11-20', zonesCovered: 5, randomChecksDone: 15, sincerityRating: 4.5, feedbackScore: 92 },
    { id: 2, supervisorName: 'Elena Ray', zooName: 'Zoo B', date: '2025-11-25', zonesCovered: 8, randomChecksDone: 22, sincerityRating: 4.8, feedbackScore: 95 },
    { id: 3, supervisorName: 'Marcus Chen', zooName: 'Wildlife Reserve C', date: '2025-12-01', zonesCovered: 6, randomChecksDone: 18, sincerityRating: 3.9, feedbackScore: 88 },
    { id: 4, supervisorName: 'David Lee', zooName: 'Zoo A', date: '2025-12-05', zonesCovered: 7, randomChecksDone: 20, sincerityRating: 4.6, feedbackScore: 93 },
];

// --- CONSTANTS ---
const zooOptions = ['All', 'Zoo A', 'Zoo B', 'Wildlife Reserve C'];
const supervisorOptions = ['All', 'David Lee', 'Elena Ray', 'Marcus Chen'];

const tableHeaders = [
    { key: 'date', label: 'Date' },
    { key: 'supervisorName', label: 'Supervisor Name' },
    { key: 'zooName', label: 'Zoo Name' },
    { key: 'zonesCovered', label: 'Zones Covered' },
    { key: 'randomChecksDone', label: 'Random Checks' },
    { key: 'sincerityRating', label: 'Sincerity Rating' },
    { key: 'feedbackScore', label: 'Feedback Score' },
];

// --- UTILITY FUNCTIONS ---
const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return '';
    try {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`; // DD-MM-YYYY format
    } catch (error) {
        return dateString;
    }
};

// --- MAIN COMPONENT ---
const SupervisorPerformanceReport: React.FC = () => {
    const [filters, setFilters] = useState<FilterState>({
        supervisorName: 'All',
        zooName: 'All',
        startDate: '2025-11-01', 
        endDate: '2025-12-31',
    });
    const [dateError, setDateError] = useState<string | null>(null);

    // Filter change handler including date validation
    const handleFilterChange = (key: keyof FilterState, value: string) => {
        setFilters(prev => {
            const newFilters = { ...prev, [key]: value };
            setDateError(null);

            // Date validation
            if (key === 'startDate' || key === 'endDate') {
                const newStartDate = key === 'startDate' ? value : prev.startDate;
                const newEndDate = key === 'endDate' ? value : prev.endDate;

                const start = new Date(newStartDate);
                const end = new Date(newEndDate);

                if (start > end) {
                    setDateError('End Date cannot be before Start Date.');
                    // Reset the conflicting date to match the other date
                    if (key === 'startDate') {
                        return { ...prev, startDate: value, endDate: value };
                    } else {
                        return { ...prev, endDate: value, startDate: value };
                    }
                }
            }
            
            return newFilters;
        });
    };

    // Filtering logic
    const filteredData = mockData.filter((item) => {
        // 1. Categorical/Text filters
        const matchesCategoricalFilters = (
            (filters.zooName === 'All' || item.zooName === filters.zooName) &&
            (filters.supervisorName === 'All' || item.supervisorName === filters.supervisorName)
        );

        // 2. Date Range Filter
        const itemDate = new Date(item.date);
        const start = new Date(filters.startDate);
        const end = new Date(filters.endDate);
        
        end.setDate(end.getDate() + 1); // Include the end date fully

        const matchesDateRange = itemDate >= start && itemDate < end;

        return matchesCategoricalFilters && matchesDateRange; 
    });

    // Helper for rating display
    const getRatingStyle = (rating: number) => {
        if (rating >= 4.5) return 'bg-green-100 text-green-800';
        if (rating >= 4.0) return 'bg-blue-100 text-blue-800';
        return 'bg-yellow-100 text-yellow-800';
    };
    
    // --- RENDER ---
    return (
        <div className="p-6 bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                
                {/* 1. HEADER */}
                <div className="p-4 md:p-6 border-b border-gray-200">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center">
                        <i className="fas fa-chart-line mr-3 text-indigo-600"></i>
                        Supervisor Performance Report
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">Track key metrics and scores for supervisors.</p>
                </div>

                {/* 2. FILTER CONTROLS */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 border-b border-gray-200 bg-gray-50">
                    
                    {/* Supervisor Filter */}
                    <div className="flex flex-col">
                        <label className="text-xs font-medium text-gray-500 mb-1">Supervisor Name</label>
                        <select 
                            value={filters.supervisorName} 
                            onChange={(e) => handleFilterChange('supervisorName', e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {supervisorOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Zoo Filter */}
                    <div className="flex flex-col">
                        <label className="text-xs font-medium text-gray-500 mb-1">Zoo Name</label>
                        <select 
                            value={filters.zooName} 
                            onChange={(e) => handleFilterChange('zooName', e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {zooOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Start Date Input */}
                    <div className="flex flex-col">
                        <label className="text-xs font-medium text-gray-500 mb-1">Start Date</label>
                        <input 
                            type="date" 
                            value={filters.startDate}
                            onChange={(e) => handleFilterChange('startDate', e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {dateError && filters.startDate === filters.endDate && (
                             <p className="mt-1 text-xs font-medium text-red-600">{dateError}</p>
                        )}
                    </div>

                    {/* End Date Input */}
                    <div className="flex flex-col">
                        <label className="text-xs font-medium text-gray-500 mb-1">End Date</label>
                        <input 
                            type="date" 
                            value={filters.endDate}
                            onChange={(e) => handleFilterChange('endDate', e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Clear Filters Button */}
                    <div className="flex items-end pt-2 md:pt-0">
                        <button 
                            onClick={() => setFilters({
                                supervisorName: 'All',
                                zooName: 'All',
                                startDate: '2025-11-01', 
                                endDate: '2025-12-31',
                            })}
                            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition duration-150"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                {/* Date Validation Error Message */}
                {dateError && filters.startDate !== filters.endDate && (
                    <div className="p-4 bg-red-50">
                        <p className="text-sm font-medium text-red-700">
                            <i className="fas fa-exclamation-triangle mr-2"></i>{dateError}
                        </p>
                    </div>
                )}

                {/* 3. PERFORMANCE TABLE */}
                <div className="overflow-x-auto p-4 pt-0">
                    <div className="text-sm text-gray-600 mb-2 mt-4 font-semibold">
                        Showing {filteredData.length} records.
                    </div>
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-100">
                        <thead className="bg-gray-50">
                            <tr>
                                {tableHeaders.map((header) => (
                                    <th 
                                        key={header.key} 
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                                    >
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr key={item.id} className="hover:bg-indigo-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {formatDateForDisplay(item.date)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.supervisorName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-semibold">
                                            {item.zooName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.zonesCovered}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.randomChecksDone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRatingStyle(item.sincerityRating)}`}>
                                                {item.sincerityRating} / 5.0
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                                            {item.feedbackScore}%
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={tableHeaders.length} className="px-6 py-8 text-center text-sm text-gray-500">
                                        No performance records found matching the current filters.
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

export default SupervisorPerformanceReport;