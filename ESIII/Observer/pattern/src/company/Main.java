package company;
import static company.Event.*;

public class Main {

	public static void main(String[] args) {
		
		Store store = new Store();
        store.getService().subscribe(NOVO_PRODUTO, new EmailMsgListener("guilherme@gmail.com"));
        store.getService().subscribe(PROMOCAO, new EmailMsgListener("joao@outlook.com"));
        store.getService().subscribe(PROMOCAO, new EmailMsgListener("pedro@yahoo.com"));
        store.getService().subscribe(NOVO_PRODUTO, new MobileAppListener("9203-2234"));

        store.newItemPromotion();

        System.out.println("==========================================");
        
        store.salePromotion();

        System.out.println("==========================================");
        
        // removendo Pedro da lista de Promoções
        store.getService().unsubscribe(PROMOCAO, new EmailMsgListener("pedro@yahoo.com"));
        store.salePromotion();

    }
}
