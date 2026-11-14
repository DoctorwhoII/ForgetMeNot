/**
 * Forget Me Not - Shared Dashboard Navigation Component
 */

function renderDashboardSidebar(activeKey) {
    const user = Storage.getUser();
    const profiles = Storage.getProfiles();
    const isFree = user.tier === 'FREE';

    const sidebarHTML = `
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <a href="../dashboard/index.html" class="sidebar-logo">
                    Forget <span>Me Not</span>
                </a>
                <button class="modal-close" id="mobile-close" style="display: none; font-size: 1.25rem;">&times;</button>
            </div>
            <ul class="sidebar-menu">
                <li>
                    <a href="index.html" class="sidebar-item ${activeKey === 'dashboard' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="profiles.html" class="sidebar-item ${activeKey === 'profiles' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        Profiles (${profiles.length}/${isFree ? '3' : '∞'})
                    </a>
                </li>
                <li>
                    <a href="occasions.html" class="sidebar-item ${activeKey === 'occasions' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        Occasions
                    </a>
                </li>
                <li>
                    <a href="gifts.html" class="sidebar-item ${activeKey === 'gifts' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                        Gift Discovery
                    </a>
                </li>
                <li>
                    <a href="saved.html" class="sidebar-item ${activeKey === 'saved' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                        Saved Gifts
                    </a>
                </li>
                <li>
                    <a href="consultations.html" class="sidebar-item ${activeKey === 'consultations' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        Consultations
                    </a>
                </li>
                <li>
                    <a href="notifications.html" class="sidebar-item ${activeKey === 'notifications' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                        Notifications
                    </a>
                </li>
                <li>
                    <a href="settings.html" class="sidebar-item ${activeKey === 'settings' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        Settings & Plan
                    </a>
                </li>
            </ul>
            <div class="sidebar-footer">
                <div class="user-mini">
                    <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
                    <div class="user-info">
                        <h4>${user.name}</h4>
                        <span>${user.tier} Plan</span>
                    </div>
                </div>
            </div>
        </aside>
    `;

    const topbarHTML = `
        <header class="topbar">
            <div style="display: flex; align-items: center; gap: var(--space-md);">
                <button id="mobile-toggle" class="btn btn-secondary btn-sm" style="display: none; padding: 0.5rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                </button>
                <div class="topbar-title">
                    <h1 id="page-heading">Dashboard</h1>
                </div>
            </div>
            <div class="topbar-actions">
                <a href="../index.html" class="btn btn-secondary btn-sm">Public Site</a>
                <a href="profiles.html" class="btn btn-primary btn-sm">+ Add Profile</a>
            </div>
        </header>
    `;

    // Inject into container if present
    const container = document.getElementById('dashboard-app');
    if (container) {
        container.innerHTML = sidebarHTML + `<div class="main-content">${topbarHTML}<div class="dashboard-body" id="dashboard-main-body"></div></div>`;
    }

    // Setup mobile toggle
    const toggleBtn = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('mobile-close');

    if (toggleBtn && sidebar) {
        if (window.innerWidth <= 992) {
            toggleBtn.style.display = 'inline-flex';
            if (closeBtn) closeBtn.style.display = 'block';
        }
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-active');
        });
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                sidebar.classList.remove('mobile-active');
            });
        }
    }
}
