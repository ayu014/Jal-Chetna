// Enhanced Static Mock Data with multiple states
const mockData = {
    maharashtra: [
        {
            id: 1,
            name: "Nagpur",
            coords: [21.1458, 79.0882],
            hgi: 32,
            level: 22.5,
            levelChange: -1.2,
            forecastTrend: [22.5, 22.8, 23.1, 23.5, 23.9, 24.2, 24.5],
            alerts: [
                { 
                    type: "red", 
                    title: "Critical HGI Level",
                    message: "HGI has dropped to a critical level of 32.",
                    details: "Immediate intervention required. Water conservation measures should be implemented. Expected to worsen over next 7 days."
                },
                { 
                    type: "yellow", 
                    title: "Post-Monsoon Depletion",
                    message: "Rapid depletion detected post-monsoon season.",
                    details: "Groundwater levels dropping faster than seasonal average. Monitor daily and restrict non-essential usage."
                }
            ]
        },
        {
            id: 2,
            name: "Pune",
            coords: [18.5204, 73.8567],
            hgi: 78,
            level: 8.2,
            levelChange: 0.3,
            forecastTrend: [8.2, 8.1, 8.1, 8.0, 7.9, 7.9, 7.8],
            alerts: [
                { 
                    type: "green", 
                    title: "Stable Conditions",
                    message: "Groundwater levels are stable and within normal range.",
                    details: "Current levels are optimal. Continue regular monitoring. No immediate action required."
                }
            ]
        },
        {
            id: 3,
            name: "Nashik",
            coords: [19.9975, 73.7898],
            hgi: 65,
            level: 12.8,
            levelChange: -0.5,
            forecastTrend: [12.8, 13.0, 13.2, 13.4, 13.6, 13.8, 14.0],
            alerts: [
                { 
                    type: "yellow", 
                    title: "Moderate Decline",
                    message: "Moderate decline in groundwater levels observed.",
                    details: "Levels decreasing at 0.5m over past week. Increase monitoring frequency to twice daily."
                },
                { 
                    type: "green", 
                    title: "Normal Recharge Rate",
                    message: "Recharge rate is within normal parameters.",
                    details: "Monsoon recharge was adequate. Natural recovery expected over next month."
                }
            ]
        },
        {
            id: 4,
            name: "Wardha",
            coords: [20.7453, 78.6022],
            hgi: 28,
            level: 28.3,
            levelChange: -2.1,
            forecastTrend: [28.3, 29.1, 29.8, 30.5, 31.2, 31.9, 32.6],
            alerts: [
                { 
                    type: "red", 
                    title: "Critical Depletion",
                    message: "Critical groundwater depletion detected.",
                    details: "Water level dropped 2.1m in past week. Declare water emergency. Implement strict rationing immediately."
                },
                { 
                    type: "red", 
                    title: "Emergency Measures",
                    message: "Emergency conservation measures recommended.",
                    details: "Contact state water board. Deploy emergency water supply. Suspend all non-essential water usage permits."
                }
            ]
        },
        {
            id: 5,
            name: "Yavatmal",
            coords: [20.3897, 78.1307],
            hgi: 45,
            level: 18.7,
            levelChange: -0.8,
            forecastTrend: [18.7, 19.2, 19.6, 20.0, 20.4, 20.8, 21.2],
            alerts: [
                { 
                    type: "yellow", 
                    title: "Below Average Levels",
                    message: "Below average groundwater levels detected.",
                    details: "Current levels 15% below seasonal average. Consider water conservation advisory for local population."
                },
                { 
                    type: "yellow", 
                    title: "Close Monitoring",
                    message: "Monitor closely for further decline.",
                    details: "Install automated monitoring equipment. Set alert threshold at 20m depth. Review weekly."
                }
            ]
        },
        {
            id: 6,
            name: "Kolhapur",
            coords: [16.7050, 74.2433],
            hgi: 72,
            level: 9.4,
            levelChange: 0.8,
            forecastTrend: [9.4, 9.2, 9.0, 8.9, 8.8, 8.7, 8.6],
            alerts: [
                { 
                    type: "green", 
                    title: "Excellent Recovery",
                    message: "Groundwater showing excellent post-monsoon recovery.",
                    details: "Water table improved by 0.8m this week. Maintain current usage patterns. No restrictions needed."
                }
            ]
        }
    ],
    karnataka: [
        {
            id: 7,
            name: "Bengaluru",
            coords: [12.9716, 77.5946],
            hgi: 41,
            level: 35.2,
            levelChange: -1.5,
            forecastTrend: [35.2, 35.8, 36.4, 37.0, 37.6, 38.2, 38.8],
            alerts: [
                { 
                    type: "yellow", 
                    title: "Urban Water Stress",
                    message: "High urban demand causing groundwater stress.",
                    details: "Population growth impacting water table. Implement rainwater harvesting mandate. Monitor daily."
                },
                { 
                    type: "red", 
                    title: "Rapid Depletion",
                    message: "Groundwater depleting at 1.5m per week.",
                    details: "Unsustainable extraction rate. Restrict bore well licenses. Increase public water supply efficiency."
                }
            ]
        },
        {
            id: 8,
            name: "Mysore",
            coords: [12.2958, 76.6394],
            hgi: 68,
            level: 15.3,
            levelChange: -0.3,
            forecastTrend: [15.3, 15.5, 15.7, 15.9, 16.1, 16.3, 16.5],
            alerts: [
                { 
                    type: "green", 
                    title: "Stable Levels",
                    message: "Groundwater levels remain stable with minor fluctuation.",
                    details: "Seasonal variation within normal range. Continue regular monitoring schedule."
                }
            ]
        },
        {
            id: 9,
            name: "Hubli",
            coords: [15.3647, 75.1240],
            hgi: 55,
            level: 20.8,
            levelChange: -0.7,
            forecastTrend: [20.8, 21.2, 21.6, 22.0, 22.4, 22.8, 23.2],
            alerts: [
                { 
                    type: "yellow", 
                    title: "Moderate Concern",
                    message: "Groundwater showing signs of moderate stress.",
                    details: "Agricultural demand exceeding recharge rate. Promote drip irrigation. Monitor weekly."
                }
            ]
        },
        {
            id: 10,
            name: "Mangalore",
            coords: [12.9141, 74.8560],
            hgi: 75,
            level: 6.8,
            levelChange: 1.2,
            forecastTrend: [6.8, 6.5, 6.2, 6.0, 5.9, 5.8, 5.7],
            alerts: [
                { 
                    type: "green", 
                    title: "Coastal Advantage",
                    message: "Coastal location maintaining excellent groundwater levels.",
                    details: "High monsoon recharge and coastal aquifer support. Water table improved 1.2m this week."
                }
            ]
        },
        {
            id: 11,
            name: "Bellary",
            coords: [15.1394, 76.9214],
            hgi: 29,
            level: 42.7,
            levelChange: -2.8,
            forecastTrend: [42.7, 43.9, 45.1, 46.3, 47.5, 48.7, 49.9],
            alerts: [
                { 
                    type: "red", 
                    title: "Severe Depletion",
                    message: "Severe groundwater depletion in mining region.",
                    details: "Mining activities and low rainfall created critical situation. Water level dropped 2.8m. Emergency supplies needed."
                },
                { 
                    type: "red", 
                    title: "Mining Impact",
                    message: "Industrial mining operations affecting water table.",
                    details: "Coordinate with mining companies for water management. Consider temporary operational restrictions."
                }
            ]
        }
    ],
    rajasthan: [
        {
            id: 12,
            name: "Jaipur",
            coords: [26.9124, 75.7873],
            hgi: 35,
            level: 45.6,
            levelChange: -1.8,
            forecastTrend: [45.6, 46.8, 48.0, 49.2, 50.4, 51.6, 52.8],
            alerts: [
                { 
                    type: "red", 
                    title: "Desert State Challenge",
                    message: "Arid climate creating severe groundwater challenges.",
                    details: "Low rainfall and high evaporation. Water table dropping 1.8m weekly. Strict conservation required."
                },
                { 
                    type: "yellow", 
                    title: "Tourism Impact",
                    message: "High tourism demand straining water resources.",
                    details: "Peak season water usage exceeding sustainable limits. Implement tourist area water management."
                }
            ]
        },
        {
            id: 13,
            name: "Jodhpur",
            coords: [26.2389, 73.0243],
            hgi: 25,
            level: 52.3,
            levelChange: -2.5,
            forecastTrend: [52.3, 53.8, 55.3, 56.8, 58.3, 59.8, 61.3],
            alerts: [
                { 
                    type: "red", 
                    title: "Critical Desert Conditions",
                    message: "Extremely low groundwater in desert region.",
                    details: "HGI at critical 25. Water table at 52m depth and falling rapidly. Deploy emergency water tankers."
                },
                { 
                    type: "red", 
                    title: "Emergency Declaration",
                    message: "Water emergency declared for district.",
                    details: "Coordinate with state disaster management. Activate drought relief measures immediately."
                }
            ]
        },
        {
            id: 14,
            name: "Udaipur",
            coords: [24.5854, 73.7125],
            hgi: 48,
            level: 28.9,
            levelChange: -1.1,
            forecastTrend: [28.9, 29.6, 30.3, 31.0, 31.7, 32.4, 33.1],
            alerts: [
                { 
                    type: "yellow", 
                    title: "Lake City Challenges",
                    message: "Lake city facing moderate groundwater stress.",
                    details: "Tourist demand and local usage creating pressure. Monitor lake levels and groundwater correlation."
                }
            ]
        },
        {
            id: 15,
            name: "Ajmer",
            coords: [26.4499, 74.6399],
            hgi: 38,
            level: 38.4,
            levelChange: -1.6,
            forecastTrend: [38.4, 39.4, 40.4, 41.4, 42.4, 43.4, 44.4],
            alerts: [
                { 
                    type: "red", 
                    title: "Pilgrimage Pressure",
                    message: "Religious tourism creating additional water demand.",
                    details: "Ajmer Sharif pilgrim influx straining water resources. Coordinate with religious authorities for conservation."
                }
            ]
        },
        {
            id: 16,
            name: "Bikaner",
            coords: [28.0229, 73.3119],
            hgi: 22,
            level: 68.7,
            levelChange: -3.2,
            forecastTrend: [68.7, 70.5, 72.3, 74.1, 75.9, 77.7, 79.5],
            alerts: [
                { 
                    type: "red", 
                    title: "Extreme Desert Crisis",
                    message: "Extreme groundwater crisis in desert region.",
                    details: "Lowest HGI at 22. Water table at dangerous 68m depth. Evacuate vulnerable populations if needed."
                },
                { 
                    type: "red", 
                    title: "Agricultural Emergency",
                    message: "Agricultural sector facing complete water shortage.",
                    details: "Crop failure imminent. Provide immediate farmer relief packages. Deploy water trains if necessary."
                }
            ]
        }
    ]
};

// Global variables
let map;
let chartInstance;
let markers = [];
let currentState = 'maharashtra';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    
    // Show loading screen initially
    showLoading();
    
    // Hide loading screen after content loads
    setTimeout(() => {
        hideLoading();
    }, 1500);
});

// Loading screen functions
function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('show');
    }
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('show');
    }
}

function showLoadingWithText(text, subtext) {
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = loadingOverlay.querySelector('.loading-text');
    const loadingSubtext = loadingOverlay.querySelector('.loading-subtext');
    
    if (loadingText) loadingText.textContent = text;
    if (loadingSubtext) loadingSubtext.textContent = subtext;
    
    showLoading();
}

function initializeEventListeners() {
    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Navigation buttons
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (loginBtn) loginBtn.addEventListener('click', () => showSection('login-section'));
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    
    // State selector
    const stateSelect = document.getElementById('state-select');
    if (stateSelect) {
        stateSelect.addEventListener('change', handleStateChange);
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    // Get form values and trim whitespace
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    console.log('Login attempt:', { username, password }); // Debug log
    
    // Check credentials (case-insensitive)
    if (username.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
        // Show loading screen
        showLoadingWithText('Authenticating...', 'Logging you into the dashboard');
        
        // Simulate loading time
        setTimeout(() => {
            showLoadingWithText('Loading Dashboard...', 'Preparing your groundwater data');
            
            setTimeout(() => {
                // Proceed with login
                showSection('dashboard-section');
                document.getElementById('login-btn').classList.add('hidden');
                document.getElementById('logout-btn').classList.remove('hidden');
                initDashboard();
                hideLoading();
            }, 1500);
        }, 1000);
    } else {
        alert('Invalid credentials. Please use:\nUsername: admin\nPassword: admin');
    }
}

function handleLogout() {
    showLoadingWithText('Logging out...', 'Securing your session');
    
    setTimeout(() => {
        showSection('login-section');
        document.getElementById('login-btn').classList.remove('hidden');
        document.getElementById('logout-btn').classList.add('hidden');
        document.getElementById('login-form').reset();
        hideLoading();
    }, 1000);
}

function handleStateChange(event) {
    const newState = event.target.value;
    
    if (newState !== currentState) {
        showLoadingWithText('Switching State...', `Loading ${newState.charAt(0).toUpperCase() + newState.slice(1)} data`);
        
        setTimeout(() => {
            currentState = newState;
            updateMapTitle();
            clearMap();
            initMap();
            populateSummaryCards();
            resetPanels();
            hideLoading();
        }, 2000);
    }
}

function updateMapTitle() {
    const mapTitle = document.getElementById('map-title');
    const stateNames = {
        'maharashtra': 'Maharashtra',
        'karnataka': 'Karnataka', 
        'rajasthan': 'Rajasthan'
    };
    if (mapTitle) {
        mapTitle.textContent = `${stateNames[currentState]} Districts`;
    }
}

function resetPanels() {
    // Reset details panel
    const detailsPanel = document.getElementById('details-panel');
    if (detailsPanel) {
        detailsPanel.innerHTML = `
            <h3><i class="fa-solid fa-arrow-pointer"></i> Select a district on the map to view details</h3>
            <p class="placeholder-text">Click on any district marker to see detailed groundwater information, current levels, and trends.</p>
        `;
    }
    
    // Reset alerts panel
    const alertsList = document.getElementById('alerts-list');
    if (alertsList) {
        alertsList.innerHTML = '<li class="no-alerts">Select a district to view alerts</li>';
    }
    
    // Reset chart
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    const placeholder = document.getElementById('chart-placeholder');
    if (placeholder) {
        placeholder.style.display = 'flex';
    }
}

function showSection(sectionId) {
    const sections = ['login-section', 'dashboard-section'];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('section-fade-in');
    }
}

function initDashboard() {
    populateSummaryCards();
    initMap();
    // Show data for first district by default
    const firstDistrict = mockData[currentState][0];
    if (firstDistrict) {
        populateAlerts(firstDistrict);
        updateForecastChart(firstDistrict);
    }
}

function populateSummaryCards() {
    const summaryContainer = document.getElementById('summary-cards');
    const stateData = mockData[currentState];
    
    if (!summaryContainer || !stateData) return;
    
    // Calculate statistics
    const totalDistricts = stateData.length;
    const averageHGI = Math.round(stateData.reduce((sum, d) => sum + d.hgi, 0) / totalDistricts);
    const criticalDistricts = stateData.filter(d => d.hgi < 40).length;
    const stableDistricts = stateData.filter(d => d.hgi >= 70).length;
    
    const cards = [
        {
            title: 'Total Districts',
            value: totalDistricts,
            description: 'Districts monitored',
            icon: 'fa-map-location-dot',
            color: 'var(--primary-blue)'
        },
        {
            title: 'Average HGI',
            value: averageHGI,
            description: 'Hyperlocal Groundwater Index',
            icon: 'fa-chart-line',
            color: averageHGI >= 60 ? 'var(--hgi-green)' : averageHGI >= 40 ? 'var(--hgi-yellow)' : 'var(--hgi-red)'
        },
        {
            title: 'Critical Districts',
            value: criticalDistricts,
            description: 'HGI below 40',
            icon: 'fa-triangle-exclamation',
            color: 'var(--hgi-red)'
        },
        {
            title: 'Stable Districts',
            value: stableDistricts,
            description: 'HGI above 70',
            icon: 'fa-circle-check',
            color: 'var(--hgi-green)'
        }
    ];
    
    summaryContainer.innerHTML = cards.map(card => `
        <div class="summary-card">
            <div class="summary-card-header">
                <h4>${card.title}</h4>
                <i class="fa-solid ${card.icon}" style="color: ${card.color};"></i>
            </div>
            <div class="summary-value" style="color: ${card.color};">${card.value}</div>
            <div class="summary-description">${card.description}</div>
        </div>
    `).join('');
}

function clearMap() {
    if (map && markers.length > 0) {
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];
    }
}

function initMap() {
    const stateData = mockData[currentState];
    const stateCoords = {
        'maharashtra': [19.7515, 75.7139],
        'karnataka': [15.3173, 75.7139],
        'rajasthan': [27.0238, 74.2179]
    };
    
    if (!map) {
        map = L.map('map').setView(stateCoords[currentState], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    } else {
        map.setView(stateCoords[currentState], 7);
    }
    
    // Add markers for each district
    stateData.forEach(district => {
        const markerColor = getHGIColor(district.hgi);
        const marker = L.circleMarker(district.coords, {
            radius: 12,
            fillColor: markerColor,
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);
        
        marker.bindPopup(`
            <strong>${district.name}</strong><br>
            HGI: ${district.hgi}<br>
            Level: ${district.level}m BGL
        `);
        
        marker.on('click', () => updateAllPanels(district.id));
        markers.push(marker);
    });
}

function getHGIColor(hgi) {
    if (hgi >= 70) return '#10B981'; // Green
    if (hgi >= 40) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
}

function getHGIClass(hgi) {
    if (hgi >= 70) return 'hgi-green';
    if (hgi >= 40) return 'hgi-yellow';
    return 'hgi-red';
}

function findDistrictById(districtId) {
    const allStates = Object.values(mockData);
    for (let stateData of allStates) {
        const district = stateData.find(d => d.id === districtId);
        if (district) return district;
    }
    return null;
}

function updateAllPanels(districtId) {
    const district = findDistrictById(districtId);
    if (district) {
        updateDetailsPanel(district);
        populateAlerts(district);
        updateForecastChart(district);
    }
}

function updateDetailsPanel(district) {
    const detailsPanel = document.getElementById('details-panel');
    if (!detailsPanel) return;
    
    const changeClass = district.levelChange >= 0 ? 'change-positive' : 'change-negative';
    const changeIcon = district.levelChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down';
    
    detailsPanel.innerHTML = `
        <div class="district-name">${district.name}</div>
        <div class="hgi-score">
            <span>HGI Score:</span>
            <span class="hgi-badge ${getHGIClass(district.hgi)}">${district.hgi}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Current Level</span>
            <span class="detail-value">${district.level}m BGL</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">7-Day Change</span>
            <span class="detail-value ${changeClass}">
                <i class="fa-solid ${changeIcon}"></i>
                ${Math.abs(district.levelChange)}m
            </span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Status</span>
            <span class="detail-value">
                ${district.hgi >= 70 ? 'Stable' : district.hgi >= 40 ? 'Moderate' : 'Critical'}
            </span>
        </div>
    `;
}

function populateAlerts(district) {
    const alertsList = document.getElementById('alerts-list');
    if (!alertsList) return;
    
    if (!district.alerts || district.alerts.length === 0) {
        alertsList.innerHTML = '<li class="no-alerts">No alerts for this district</li>';
        return;
    }
    
    alertsList.innerHTML = district.alerts.map(alert => {
        const alertIcon = alert.type === 'green' ? 'fa-circle-check' : 
                         alert.type === 'yellow' ? 'fa-triangle-exclamation' : 
                         'fa-circle-exclamation';
        
        return `
            <li class="alert-${alert.type}">
                <i class="fa-solid ${alertIcon}"></i>
                <div class="alert-content">
                    <div class="alert-title">${alert.title}</div>
                    <div class="alert-message">${alert.message}</div>
                    <div class="alert-details">${alert.details}</div>
                </div>
            </li>
        `;
    }).join('');
}

function updateForecastChart(district) {
    const canvas = document.getElementById('forecast-chart');
    const placeholder = document.getElementById('chart-placeholder');
    
    if (!canvas) return;
    
    if (placeholder) {
        placeholder.style.display = 'none';
    }
    
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Water Level (m BGL)',
                data: district.forecastTrend,
                borderColor: '#2563EB',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#2563EB',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#2563EB',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Forecast Period',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Depth (meters BGL)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}
