package company;


public record EmailMsgListener(String email) implements Listener {

    @Override
    public void update(Event eventType) {
        //Enviar e-mail
        
        System.out.println("Enviando email para " + email + " sobre " + eventType);
    }

}