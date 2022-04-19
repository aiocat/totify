// Copyright (c) 2022 aiocat
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var Totify = /** @class */ (function () {
    function Totify() {
    }
    /**
     * Initialize totify settings (if don't exists)
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     */
    Totify.init = function (posX, posY) {
        var notificationDiv = document.getElementById("TOTIFY_NOTIFICATIONS");
        if (notificationDiv)
            return;
        notificationDiv = document.createElement("div");
        notificationDiv.style.position = "fixed";
        notificationDiv.style.width = "312px";
        notificationDiv.style.height = "auto";
        notificationDiv.style.zIndex = "1337";
        notificationDiv.id = "TOTIFY_NOTIFICATIONS";
        switch (posX) {
            case "RIGHT":
                notificationDiv.style.right = "0px";
                break;
            case "LEFT":
                notificationDiv.style.left = "0px";
                break;
        }
        switch (posY) {
            case "TOP":
                notificationDiv.style.top = "0px";
                break;
            case "BOTTOM":
                notificationDiv.style.bottom = "0px";
                break;
        }
        document.body.appendChild(notificationDiv);
    };
    /**
     * Notification builder for Totify.
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     * @param type - Notification type
     * @param text - Notification content
     *
     */
    Totify.build = function (type, text) {
        var notificationDiv = document.getElementById("TOTIFY_NOTIFICATIONS");
        if (!notificationDiv)
            return;
        var notification = document.createElement("div");
        notification.innerText = text;
        notification.style.padding = "5px";
        notification.style.margin = "5px";
        notification.style.borderRadius = "5px";
        notification.style.cursor = "pointer";

        notification.onclick = function () { return notification.remove(); };
        switch (type) {
            case "INFO":
                notification.style.background = "#3498db";
                notification.style.borderBottom = "2px solid #2084c7";
                break;
            case "ERROR":
                notification.style.background = "#e74c3c";
                notification.style.borderBottom = "2px solid #d33828";
                break;
            case "SUCCESS":
                notification.style.background = "#2ecc71";
                notification.style.borderBottom = "2px solid #1ab85c";
                break;
            case "WARN":
                notification.style.background = "#f39c12";
                notification.style.borderBottom = "2px solid #cf8611";
                break;
        }
        notificationDiv.appendChild(notification);
    };
    return Totify;
}());
export { Totify };
//# sourceMappingURL=index.js.map