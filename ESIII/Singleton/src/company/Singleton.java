package company;

public class Singleton {

    private final String data;

    private static volatile Singleton instance;

    private Singleton(String data) {
        //Singleton simulando a conexão de apenas um database
        this.data = data;
    }

    public static Singleton getInstance(String data) {
        Singleton result = instance;
        
        // if para garantir que exista apenas uma instância
        if (result == null) {
            synchronized (Singleton.class) {
                result = instance;
                if (result == null) {
                    instance = result = new Singleton(data);
                }
            }
        }
        return result;
    }

    public String getData() {
        return data;
    }

}
