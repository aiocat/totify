import type { NotificationType, PositionX, PositionY } from "./types";
export declare class Totify {
    /**
     * Initialize totify settings. (if don't exists)
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     */
    static init(posX: PositionX, posY: PositionY): void;
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
    static build(type: NotificationType, text: string): void;
    /**
     * Info wrapper for Totify.
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     * @param text - Notification content
     *
     */
    static info(text: string): void;
    /**
     * Warn wrapper for Totify.
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     * @param text - Notification content
     *
     */
    static warn(text: string): void;
    /**
     * Error wrapper for Totify.
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     * @param text - Notification content
     *
     */
    static error(text: string): void;
    /**
     * Success wrapper for Totify.
     *
     * @remarks
     * This method is part of the {@link core-library#Totify | Totify subsystem}.
     *
     * @param text - Notification content
     *
     */
    static success(text: string): void;
}
