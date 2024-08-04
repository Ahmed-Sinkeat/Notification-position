/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class NotificationPosition {
    constructor() {
        // Store the original banner alignment
        this._originalBannerAlignment = Main.messageTray.bannerAlignment;
    }

    // Move the notification to the left
    left() {
        Main.messageTray.bannerAlignment = Clutter.ActorAlign.START;
    }

    // Move the notification to the right
    right() {
        Main.messageTray.bannerAlignment = Clutter.ActorAlign.END;
    }

    // Center the notification
    middle() {
        Main.messageTray.bannerAlignment = Clutter.ActorAlign.CENTER;
    }

    // Restore the original banner alignment
    _original() {
        Main.messageTray.bannerAlignment = this._originalBannerAlignment;
    }

    // Enable the extension and set the notification position to the left
    enable() {
        this.left();
    }

    // Disable the extension and restore the original alignment
    disable() {
        this._original();
    }
}

