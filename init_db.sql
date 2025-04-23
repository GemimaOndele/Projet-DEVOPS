-- Création de la table des utilisateurs
CREATE TABLE utilisateurs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    mot_de_passe TEXT NOT NULL,
    role TEXT CHECK(role IN ('Employé', 'Technicien', 'Admin')) NOT NULL,
    date_inscription TEXT NOT NULL
);

-- Création de la table des tickets
CREATE TABLE tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    description TEXT NOT NULL,
    statut TEXT CHECK(statut IN ('Ouvert', 'En cours', 'Résolu', 'Fermé')) NOT NULL,
    priorité TEXT CHECK(priorité IN ('Faible', 'Moyenne', 'Élevée', 'Critique')) NOT NULL,
    date_creation TEXT NOT NULL,
    date_mise_a_jour TEXT NOT NULL,
    id_employe INTEGER NOT NULL,
    id_technicien INTEGER,
    FOREIGN KEY (id_employe) REFERENCES utilisateurs(id),
    FOREIGN KEY (id_technicien) REFERENCES utilisateurs(id)
);

-- Création de la table des commentaires
CREATE TABLE commentaires (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id INTEGER NOT NULL,
    auteur_id INTEGER NOT NULL,
    commentaire TEXT NOT NULL,
    date_commentaire TEXT NOT NULL,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id),
    FOREIGN KEY (auteur_id) REFERENCES utilisateurs(id)
);
