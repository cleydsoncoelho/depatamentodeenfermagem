import os
import shutil

# Definir a estrutura de diretórios e arquivos
estrutura = {
    "Consultorio1": ["preconsulta.html", "teleconsulta.html"],
    "Consultorio2": ["preconsulta.html", "teleconsulta.html"],
    "Contato": ["contato.html"],
    "css": ["bootstrap.min.css"],
    "img": [],
    "js": ["bootstrap.bundle.js", "bootstrap.min.js"],
    "SalaCirurgica1": ["intraop.html"],
    "SalaCirurgica2": ["intraop.html"],
    "SalaCirurgica3": ["intraop.html"],
    "SalaCirurgica4": ["intraop.html"],
    "SalaCirurgica5": ["intraop.html"],
    "SalaCirurgica6": ["intraop.html"],
    "SalaPosOperatorio": ["posop.html"],
    "SalaPreOperatoria": ["preop.html"],
}

# Caminho da pasta Template
template_dir = "Template"

# Função para criar a estrutura de diretórios e copiar os arquivos
def criar_estrutura(base_dir):
    for pasta, arquivos in estrutura.items():
        # Criar diretório se não existir
        pasta_path = os.path.join(base_dir, pasta)
        os.makedirs(pasta_path, exist_ok=True)
        
        # Copiar ou substituir arquivos da pasta Template
        for arquivo in arquivos:
            src_file = os.path.join(template_dir, arquivo)
            dest_file = os.path.join(pasta_path, arquivo)
            if os.path.exists(src_file):
                if os.path.exists(dest_file):
                    os.remove(dest_file)
                shutil.copy(src_file, dest_file)
                print(f"Arquivo {arquivo} substituído em {pasta_path}.")
            else:
                print(f"Arquivo {arquivo} não encontrado na pasta Template.")

# Diretório base onde a estrutura será criada
base_dir = "."

# Criar a estrutura de diretórios e copiar os arquivos
criar_estrutura(base_dir)