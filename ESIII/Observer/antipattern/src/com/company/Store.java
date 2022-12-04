package com.company;

public class Store {
    private final NotificationService notificationService;

    public Store() {
        notificationService = new NotificationService();
    }

    public void newItemPromotion() {
        notificationService.notificar();
    }

    public  NotificationService getService() {
        return notificationService;
    }
}
