package company;
import static company.Event.*;

public class Store {

    private final NotificationService notificationService;

    public Store() {
        notificationService = new NotificationService();
    }

    public void newItemPromotion() {
        notificationService.notifyCustomers(NOVO_PRODUTO);
    }

    public void salePromotion() {
        notificationService.notifyCustomers(PROMOCAO);
    }

    public NotificationService getService() {
        return notificationService;
    }

}